import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const params = getQuery(event)
  if (params.unit === null || params.unit === undefined)
    return new Response('No unit name provided', { status: 400 })

  const response = await prisma.page.findMany({
    where: {
      unit: params.unit?.toString(),
    },
  }).then(async (res) => {
    await prisma.$disconnect()
    if (res === null || res === undefined)
      return new Response('No page found', { status: 404 })
    return res
  })
    .catch(async (e) => {
      await prisma.$disconnect()
      return e
    })
  return response
})
