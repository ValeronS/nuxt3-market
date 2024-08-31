/**
 * @param count - количество
 * @param txt - массив вариантов: 1 - ед.число, 2 - 2 единицы, 3 - 5 единиц
 */
export const endingSubstitution = (count: number, txt: string[]) => {
  const cases: number[] = [2, 0, 1, 1, 1, 2]
  return txt[
    count % 100 > 4 && count % 100 < 20
      ? 2
      : cases[count % 10 < 5 ? count % 10 : 5]
  ]
}

/**
 * Форматирование по виду + 7 (123) 456-78-90
 * @param phone
 */
export const formatPhone = (phone?: string) => {
  if (!phone) return
  return `+7 (${phone.slice(2, 5)}) ${phone.slice(5, 8)}-${phone.slice(8, 10)}-${phone.slice(
    10,
  )}`
}
