import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const userObj: UserObject = body
  const response = await prisma.user.findFirst({
    where: {
      name: userObj.name,
      password: userObj.password,
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
