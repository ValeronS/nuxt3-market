import { companiesReview } from '~/server/routes/data'

export default defineEventHandler(async (e) => {
  const { id } = getQuery(e)

  return companiesReview.find((el) => el.id === id)
})
