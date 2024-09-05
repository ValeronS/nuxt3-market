import { products } from '~/server/routes/data'

// получение списка продуктов

export default defineEventHandler(() => {
  return products
})
