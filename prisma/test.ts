import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface UserObject {
  name: string
  password: string
}
const body = { name: 'asd', password: 'asd' }
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
