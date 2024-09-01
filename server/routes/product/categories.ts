import type { Category } from '~/utils/types'

export default defineEventHandler(() => {
  const categories: Category[] = [
    { value: 4, title: 'Покрывало', category: 2, count: 1 },
    { value: 1, title: 'Гробы', category: 1, count: 5 },
    { value: 3, title: 'Тапки', category: 2, count: 2 },
    { value: 2, title: 'Урны', category: 1, count: 12 },
  ]
  return categories
})
