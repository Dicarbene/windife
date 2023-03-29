import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface UserObject {
  name: string
  password: string
}
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const userObj: UserObject = body
  const response = await prisma.user.create({
    data: {
      name: userObj.name,
      password: userObj.password,
    },
  }).then(async (res) => {
    await prisma.$disconnect()
    return res
  })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })
  return response
})
