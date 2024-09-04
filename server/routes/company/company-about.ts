import { companiesAbout } from '~/server/routes/data'

export default defineEventHandler(async (e) => {
  const { id } = getQuery(e)

  return companiesAbout.get(id as string)
})
