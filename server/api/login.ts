import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const counter = 0
export default defineEventHandler(() => {
  new Promise((resolve, reject) => {
    
  }).then(async () => {
    await prisma.$disconnect()
  })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })
  return counter
})
