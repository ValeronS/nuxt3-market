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
