<script setup lang="ts">
import CheckedIcon from 'assets/icon/CheckedIcon.vue'
import type { Category } from '~/utils/types'

const selected = defineModel<number | null>()

const { data: categories } = await useFetch<Category[]>('/product/categories')

type CategorizedItem =
  | (Category & { props: { count: number } })
  | { props: { category: string } }

const sortedCategories = computed<CategorizedItem[]>(() => {
  // для корректной работы v-select нужно к объектам списка добавить свойства props с нужными для логики данными
  if (!categories.value) return []
  const sorted = [...categories.value]
  sorted.sort((a, b) => a.category - b.category)
  const result: CategorizedItem[] = []
  let currentCategory: number | null = null
  sorted.forEach((item) => {
    if (item.category !== currentCategory) {
      result.push({
        props: { category: `Категория ${item.category}` },
      })
      currentCategory = item.category
    }
    result.push({ ...item, props: { count: item.count } })
  })
  return result
})

const isOpen = ref<boolean>(false)
const toggle = () => {
  if (!selected.value) return
  selected.value = null
  isOpen.value = false
}
</script>

<template>
  <div class="w-screen max-w-[454px] px-[16px]">
    <VSelect
      v-model="selected"
      v-model:menu="isOpen"
      :items="sortedCategories"
      variant="outlined"
      bg-color="#DBDBDB"
      label="Все товары и услуги"
    >
      <template #prepend-item>
        <v-list-item title="Все товары и услуги" @click="toggle">
          <template v-if="!selected" #append>
            <CheckedIcon />
          </template>
        </v-list-item>
      </template>

      <template #item="{ props, item }">
        <v-list-item v-if="props.category">
          <span class="text-[13px] text-bg-grey-dark">
            {{ props.category }}
          </span>
        </v-list-item>
        <v-list-item v-else v-bind="props">
          <template #title>
            {{ item.title }}
            <span class="text-bg-grey-dark">{{ props.count }}</span>
          </template>
          <template v-if="selected === item.value" #append>
            <CheckedIcon />
          </template>
        </v-list-item>
      </template>
    </VSelect>
  </div>
</template>

<style scoped lang="scss">
:deep(.v-field) {
  border-radius: 12px;
}
:deep(.v-label) {
  opacity: unset;
}
</style>
