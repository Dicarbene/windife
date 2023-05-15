import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
const prisma = new PrismaClient()

function exclude<User, Key extends keyof User>(
  user: User,
  keys: Key[],
): Omit<User, Key> {
  for (const key of keys)
    delete user[key]
  return user
}

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
    },
  }).then(async (user) => {
    let state = null
    await bcrypt.compare(userObj.password, user!.password).then((result: boolean) => {
      if (result === true)
        return state = 'resolved'
      else state = 'rejected'
    })
    if (state === 'resolved')
      return user
    else return null
  }).then(async (res) => {
    await prisma.$disconnect()
    if (res === null) {
      throw createError({
        statusCode: 400,
        statusMessage: 'password or username is incorrect',
      })
    }
    return exclude(res, ['password'])// 仅返回基本的用户信息，剔除敏感信息如密码
  })
    .catch(async (e) => {
      await prisma.$disconnect()
      throw createError({
        statusCode: 500,
        statusMessage: e,
      })
    })
  return response
})
