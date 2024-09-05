import { companiesReview } from '~/server/routes/data'

// получение рейтинговой информации компании по id

export default defineEventHandler(async (e) => {
  const { id } = getQuery(e)

  return companiesReview.find((el) => el.id === id)
})
