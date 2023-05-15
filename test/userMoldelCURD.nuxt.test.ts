import { describe, expect, test } from 'vitest'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

describe('User model', async () => {
  let userId: string | undefined
  test('Create', async () => {
    const newUser = await prisma.user.create({
      data: {
        name: 'testuser',
        password: 'password123',
        avatar: 'https://example.com/avatar.jpg',
      },
    })
    userId = newUser.id
    expect(newUser).toHaveProperty('id')
    expect(newUser.name).toBe('testuser')
    expect(newUser.password).toBe('password123')
    expect(newUser.avatar).toBe('https://example.com/avatar.jpg')
  })
  test('Read', async () => {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    })
    expect(user).toHaveProperty('id')
    expect(user?.name).toBe('testuser')
    expect(user?.password).toBe('password123')
    expect(user?.avatar).toBe('https://example.com/avatar.jpg')
  })
  test('Update', async () => {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        name: 'updateduser',
        password: 'newpassword123',
        avatar: 'https://example.com/newavatar.jpg',
      },
    })
    expect(updatedUser).toHaveProperty('id')
    expect(updatedUser.name).toBe('updateduser')
    expect(updatedUser.password).toBe('newpassword123')
    expect(updatedUser.avatar).toBe('https://example.com/newavatar.jpg')
  })
  test('Delete', async () => {
    const deletedUser = await prisma.user.delete({
      where: { id: userId },
    })
    expect(deletedUser).toHaveProperty('id')
  })
})
