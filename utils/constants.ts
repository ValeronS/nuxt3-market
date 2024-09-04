import type { DaysOfWeek, Route } from '~/utils/types'

export const AppUrls: Record<string, Route> = {
  index: {
    path: '/',
    name: 'Index',
  },
  login: {
    path: '/login',
    name: 'Login',
  },
  home: {
    path: '/home',
    name: 'Home',
  },
  agents: {
    path: '/agents',
    name: 'Agents',
  },
  aboutCompany: {
    path: '/aboutcompany',
    name: 'aboutcompany',
  },
  documents: {
    path: '/documents',
    name: 'Documents',
  },
  about: {
    path: '/about',
    name: 'About',
  },
}

export const daysOfWeek: DaysOfWeek[] = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
]
