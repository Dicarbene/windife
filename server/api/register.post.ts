import { PrismaClient } from '@prisma/client'

import bcrypt from 'bcrypt'
const prisma = new PrismaClient()
const saltRounds = 10
interface UserObject {
  name: string
  password: string
  email: string | null
}
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  if (Object.prototype.hasOwnProperty.call(body, 'email') === false)
    body.email = null
  const userObj: UserObject = body
  const hashedPassword = await bcrypt.hash(userObj.password, saltRounds).then((hash) => {
    return hash
  })
  const response = await prisma.user.create({
    data: {
      name: userObj.name,
      password: hashedPassword,
      email: userObj.email,
    },
  }).then(async (res) => {
    await prisma.$disconnect()
    return res
  })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      return e
    })
  return response
})
