import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface UserObject {
  name: string
  password: string
}
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
    if (res === null) {
      throw createError({
        statusCode: 400,
        statusMessage: 'password or username is incorrect',
      })
    }
    return res
  })
    .catch(async (e) => {
      await prisma.$disconnect()
      return e
    })
  return response
})
