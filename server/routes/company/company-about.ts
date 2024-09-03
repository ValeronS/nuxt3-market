import type { CompanyAbout } from '~/utils/types'

export default defineEventHandler(async (e) => {
  const { id } = getQuery(e)
  const companies = new Map<string, CompanyAbout>([
    [
      '1',
      {
        description:
          'Копкой занимаемся 15 лет. Все началось с хобби и плавно переросло в любимую работу. Работаем с профессиональной техникой. ',
        address: 'Ростов на Дону, Воронежская ул., 42А корп. 1',
        latitude: 39.668408,
        longitude: 47.244099,
        schedule: [
          { title: 'Понедельник', value: 'с 8:00 до 23:00' },
          { title: 'Вторник', value: 'с 8:00 до 23:00' },
          { title: 'Среда', value: 'с 8:00 до 23:00' },
          { title: 'Четверг', value: 'с 8:00 до 23:00' },
          { title: 'Пятница', value: 'с 8:00 до 23:00' },
          { title: 'Суббота', value: 'с 9:00 до 21:00' },
          { title: 'Воскресенье', value: 'выходной' },
        ],
      },
    ],
  ])
  return companies.get(id as string)
})
