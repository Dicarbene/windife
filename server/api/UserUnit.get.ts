import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const response = await prisma.unit.findMany({
    where: {
      name: body.name,
    },
  }).then(async (res) => {
    await prisma.$disconnect()
    return res
  })
    .catch(async (e) => {
      await prisma.$disconnect()
      return e
    })
  return response
})
