<script setup lang="ts">
import type { Product } from '~/utils/types'

const { data: products } = await useFetch<Product[]>('/product/list')
</script>

<template>
  <div
    class="max-w-[2200px] flex flex-col items-center mt-[25px] mx-auto px-[32px]"
  >
    <ProductSelect />

    <div class="flex flex-wrap justify-center gap-[8px]">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
