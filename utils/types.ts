export type Route = {
  path: string
  name: string
}

export type Company = {
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
