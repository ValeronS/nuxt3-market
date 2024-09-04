import type { H3Event } from 'h3'
import jwt from 'jsonwebtoken'
import { users } from '~/server/routes/data'

const isLoginCorrect = (username: string, password: string): boolean =>
  users.some((user) => user.username === username && user.password === password)

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody(event)

  const { username, password } = body

  if (isLoginCorrect(username, password)) {
    const token = jwt.sign({ username }, 'your-secret-key', { expiresIn: '1h' })
    return { token }
  }

  return sendError(
    event,
    createError({
      statusCode: 401,
      statusMessage: 'Неверные логин или пароль',
    }),
  )
})
