import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const response = await prisma.page.update({
    where: {
      id: body.id,
    },
    data: {
      data: body.data,
    },
  }).then(async (res) => {
    await prisma.$disconnect()
    if (res === null || res === undefined)
      return new Response('No unit found', { status: 404 })
    return res
  })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      return e
    })
  return response
})
