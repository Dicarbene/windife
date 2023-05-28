import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const params = getQuery(event)
  if (params.id === null || params.id === undefined)
    return new Response('No page id provided', { status: 400 })

  const response = await prisma.page.findFirstOrThrow({
    where: {
      id: params.id?.toString(),
    },
  }).then(async (res) => {
    await prisma.$disconnect()
    if (res === null || res === undefined)
      return new Response('No unit found', { status: 404 })
    return res
  })
    .catch(async (e) => {
      await prisma.$disconnect()
      return e
    })
  return response
})
