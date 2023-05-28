import fs from 'fs/promises'
import path from 'path'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const response = await prisma.admin.findFirst({
    where: {
      name: body.name,
    },
  }).then(async (user) => {
    let state = null
    await bcrypt.compare(body.password, user!.password).then((result: boolean) => {
      if (result === true)
        return state = 'resolved'
      else state = 'rejected'
    })
    if (state === 'resolved')
      return user
    else return null
  }).then(async (res) => {
    await prisma.$disconnect()
    if (res === null) {
      throw createError({
        statusCode: 400,
        statusMessage: 'password or username is incorrect',
      })
    }
    const file = await fs.readFile(path.join(__dirname, '../db.sqlite'))
    return file
  })
    .catch(async (e) => {
      await prisma.$disconnect()
      throw createError({
        statusCode: 500,
        statusMessage: e,
      })
    })
  return response
})
