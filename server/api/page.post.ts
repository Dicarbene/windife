import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const response = await prisma.page.create({
    data: {
      name: body.name,
      author: body.author,
      unit: body.unit,
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
