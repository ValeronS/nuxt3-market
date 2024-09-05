import { users } from '~/server/routes/data'

// получение пользователя по id

export default defineEventHandler(async (e) => {
  const { id } = getQuery(e)

  return users.find((user) => user.id === id)
})
