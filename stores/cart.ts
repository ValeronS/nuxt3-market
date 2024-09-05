import { defineStore } from 'pinia'
import type { Product } from '~/utils/types'

export const useCartStore = defineStore('cartStore', () => {
  // коллекция товаров добавленных в корзину
  const cart = ref<Set<Product>>()

  const setCart = (products: Set<Product>) => {
    cart.value = products
  }

  return { cart, setCart }
})
