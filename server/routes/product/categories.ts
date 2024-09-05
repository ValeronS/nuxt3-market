import { categories } from '~/server/routes/data'

// получение списка категорий товаров

export default defineEventHandler(() => {
  return categories
})
