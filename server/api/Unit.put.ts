import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  if (body.name === null || body.name === undefined)
    return new Response('No unit name provided', { status: 400 })
  const response = await prisma.unit.update({
    where: {
      name: body.name.toString(),
    },
    data: Object.assign({}, body),
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
