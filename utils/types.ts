export interface Locally {
  getItem(item: string): string | null | undefined
  setItem(item: string, value: string): void
}

// регистрация модуля для доступа из useNuxtApp
declare module '#app' {
  interface NuxtApp {
    $locally: Locally
  }
}

export type Route = {
  path: string
  name: string
}

export type BackendError = {
  data: {
    statusCode: number
    statusMessage: string
  }
}

export type User = {
  id: string
  username: string
  password: string
  imageUrl: string
  name: string
  phone: string
  city: string
}

export type Company = {
  id: string
  name: string
  logoUrl: string
  phone: string
}

type ReviewStatus = 'approved' | 'rejected' | 'onReview'
export type Review = {
  rating: number | null
  reviewCount: number
  reviewStatus: ReviewStatus
}
export enum EReviewStatus {
  approved = 'approved',
  rejected = 'rejected',
  onReview = 'onReview',
}

export type CompanyReview = Review & {
  id: string
}

export type Category = {
  value: number
  title: string
  category: number
  count: number
}

type ProductStatus = 'promote' | 'hidden'
export enum EProductStatus {
  'promote' = 'promote',
  'hidden' = 'hidden',
}
export type Product = {
  id: string
  category: number
  price: number
  imageUrl: string
  title: string
  views: number
  createdAt: string
  status: ProductStatus | null
}

export type AgentPerson = Review & {
  id: string
  name: string
  imageUrl: string
  description: string
}

export type DaysOfWeek =
  | 'Воскресенье'
  | 'Понедельник'
  | 'Вторник'
  | 'Среда'
  | 'Четверг'
  | 'Пятница'
  | 'Суббота'
type ScheduleItem = {
  title: DaysOfWeek
  value: string
}
export type CompanyAbout = {
  description: string
  schedule: ScheduleItem[]
  address: string
  latitude: number
  longitude: number
}
