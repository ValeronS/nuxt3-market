/**
 * Добавление множественных окончаний
 * @example
 * endingSubstitution(5, ['отзыв', 'отзыва', 'отзывов'])
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
 * Форматирование телефона
 * @example
 * formatPhone(+71234567890); // '+ 7 (123) 456-78-90'
 */
export const formatPhone = (phone?: string): undefined | string => {
  if (!phone) return
  return `+7 (${phone.slice(2, 5)}) ${phone.slice(5, 8)}-${phone.slice(8, 10)}-${phone.slice(
    10,
  )}`
}

/**
 * Форматирование цены
 * @example
 * formatPrice(1234567); // '1 234 567 ₽'
 */
export const formatPrice = (
  price?: string | number,
  suffix = '₽',
  locale = 'ru-RU',
): string => {
  if (!price || typeof price === 'object') return ''
  return `${parseInt(price.toString()).toLocaleString(locale)} ${suffix}`
}

/**
 * Calculates the number of days that have passed since a given date.
 * @example
 * calculateDaysBehind('2024-08-26 17:26'); // Outputs: 6
 */
export const calculateDaysBehind = (dateString: string): number => {
  const givenDate = new Date(dateString)
  const currentDate = new Date()
  const timeDifference = currentDate.getTime() - givenDate.getTime()
  return Math.floor(timeDifference / (1000 * 60 * 60 * 24))
}
