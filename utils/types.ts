export type Company = {
  name: string
  logoUrl: string
  phone: string
}

export type CompanyReview = {
  id: string
  docStatus: string
  rating: number
  reviewCount: number
}

export enum EDocStatus {
  approved = 'approved',
  rejected = 'rejected',
  onReview = 'onReview',
}

export type Category = {
  value: number
  title: string
  category: number
  count: number
}
