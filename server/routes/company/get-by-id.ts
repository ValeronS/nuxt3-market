import { companies } from '~/server/routes/data'

// получение компании по id

export default defineEventHandler(async (e) => {
  const { id } = getQuery(e)

  return companies.find((company) => company.id === id)
})
