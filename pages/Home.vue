<script setup lang="ts">
import type { Product } from '~/utils/types'

const { data: products } = await useFetch<Product[]>('/product/list')

const selectedCategory = ref<number | null>(null)
</script>

<template>
  <div class="h-full">
    <LayoutHeader />

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
          />
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
