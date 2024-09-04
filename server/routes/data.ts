import type {
  Category,
  Company,
  CompanyAbout,
  CompanyReview,
  Product,
  User,
} from '~/utils/types'

export const users: User[] = [
  {
    id: '1',
    username: 'admin',
    password: 'secret',
    imageUrl: `avatar/avatar_1.png`,
    name: 'Имя Пользователя',
    phone: '+71234567890',
    city: 'Ростов-на-Дону',
  },
]

export const companies: Company[] = [
  {
    id: '1',
    logoUrl: `logo/logo_1.png`,
    name: 'Наследие',
    phone: '+71234567890',
  },
]

// используется коллекция Map для удобного получения компании по id
export const companiesAbout = new Map<string, CompanyAbout>([
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

export const companiesReview: CompanyReview[] = [
  {
    id: '1',
    reviewStatus: 'approved',
    rating: 4.7,
    reviewCount: 19,
  },
]

export const categories: Category[] = [
  { value: 4, title: 'Покрывало', category: 2, count: 1 },
  { value: 1, title: 'Гробы', category: 1, count: 5 },
  { value: 3, title: 'Тапки', category: 2, count: 2 },
  { value: 2, title: 'Урны', category: 1, count: 12 },
]

export const products: Product[] = [
  {
    id: '1',
    category: 1,
    price: 450500,
    imageUrl: 'product/product_1.png',
    title: 'Сlavia Nord Grand сценическое цифровое пианино',
    views: 750,
    status: 'promote',
    createdAt: '2024-08-26 17:26',
  },
  {
    id: '2',
    category: 2,
    price: 3285000,
    imageUrl: 'product/product_2.png',
    title: 'Hyundai Sonata 2.0 AT, 2023, 30 км',
    views: 255,
    status: null,
    createdAt: '2024-08-28 17:26',
  },
  {
    id: '3',
    category: 3,
    price: 4800000,
    imageUrl: 'product/product_3.png',
    title: '2-к. квартира, 46 м², 1/5 эт.',
    views: 265,
    status: null,
    createdAt: '2024-08-30 17:26',
  },
  {
    id: '4',
    category: 4,
    price: 7500,
    imageUrl: 'product/product_4.png',
    title: 'Старые барабаны',
    views: 0,
    status: null,
    createdAt: '2024-09-02 12:26',
  },
  {
    id: '5',
    category: 1,
    price: 7500,
    imageUrl: 'product/product_5.png',
    title: 'DMX сплиттер RJ45 to 4x XLR Stairville',
    views: 120,
    status: null,
    createdAt: '2024-09-01 12:26',
  },
  {
    id: '6',
    category: 2,
    price: 217500,
    imageUrl: 'product/product_6.png',
    title: 'DMX сплиттер RJ45 to 4x XLR Stairville',
    views: 1234,
    status: null,
    createdAt: '2024-07-01 12:26',
  },
  {
    id: '7',
    category: 3,
    price: 17900,
    imageUrl: 'product/product_7.png',
    title: 'Иж юпитер 5',
    views: 1234,
    status: null,
    createdAt: '2024-06-01 12:26',
  },
  {
    id: '8',
    category: 4,
    price: 17900,
    imageUrl: 'product/product_8.png',
    title: 'Пылесос кёрхер с водяным мешком для сбора пыли',
    views: 555,
    status: 'hidden',
    createdAt: '2024-06-01 12:26',
  },
  {
    id: '9',
    category: 1,
    price: 7788,
    imageUrl: '',
    title: 'Пылесос кёрхер с водяным мешком для сбора пыли',
    views: 9,
    status: 'hidden',
    createdAt: '2024-06-01 12:26',
  },
]
