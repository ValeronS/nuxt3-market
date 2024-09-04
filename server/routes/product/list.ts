import { products } from '~/server/routes/data'

export default defineEventHandler(() => {
  return products
})
