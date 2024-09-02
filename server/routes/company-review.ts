import type { CompanyReview } from '~/utils/types'

export default defineEventHandler(async (e) => {
  const { id } = getQuery(e)

  const companies: CompanyReview[] = [
    {
      id: '1',
      reviewStatus: 'approved',
      rating: 4.7,
      reviewCount: 19,
    },
  ]

  return companies.find((el) => el.id === id)
})
