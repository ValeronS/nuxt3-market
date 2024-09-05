import { companiesAbout } from '~/server/routes/data'

// получение общей информации компании по id

export default defineEventHandler(async (e) => {
  const { id } = getQuery(e)

  return companiesAbout.get(id as string)
})
