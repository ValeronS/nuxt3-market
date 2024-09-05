<script setup lang="ts">
import type { Product } from '~/utils/types'
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()

const { data: products } = await useFetch<Product[]>('/product/list')

const selectedCategory = ref<number | null>(null)
const cart = ref<Set<Product>>(new Set<Product>())

const handleCart = (product: Product) => {
  cart.value.has(product) ? cart.value.delete(product) : cart.value.add(product)
  cartStore.setCart(cart.value)
}
</script>

<template>
  <div class="h-full">
    <LayoutHeader :product-count="products?.length" />

    <div
      class="max-w-[2200px] flex flex-col items-center mt-[25px] mx-auto px-[32px]"
    >
      <ProductSelect v-model="selectedCategory" />

      <div class="flex flex-wrap justify-center gap-[8px]">
        <template v-for="product in products">
          <ProductCard
            v-if="!selectedCategory || product.category === selectedCategory"
            :key="product.id"
            :product="product"
            @add-to-cart="handleCart"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
