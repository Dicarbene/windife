import { describe, expect, test } from 'vitest'

describe('login', () => {
  test('login', async () => {
    const res = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'testuser',
        password: 'password123',
      }),
    })
    const data = await res.json()
    expect(data).toHaveProperty('token')
  })
})
