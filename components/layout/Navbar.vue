<script setup lang="ts">
import CategoriesIcon from 'assets/icon/CategiesIcon.vue'
import MapMarkerIcon from 'assets/icon/MapMarkerIcon.vue'
import MenuBurgerIcon from 'assets/icon/MenuBurgerIcon.vue'

const { data } = await useFetch('/api/avatar?id=1')
console.log('data', data.value)
</script>

<template>
  <div
    class="w-full flex items-center justify-between py-[10px] px-[40px] bg-bg-highlight"
  >
    <div class="flex items-center gap-[12px]">
      <div class="pr-[25px] text-[28px] leading-[28px] font-noto font-semibold">
        Annoncé
      </div>
      <VBtn
        :height="40"
        rounded="xl"
        class="text-none"
        text="Все категории"
        variant="flat"
      >
        <template #prepend>
          <categories-icon />
        </template>
      </VBtn>
    </div>

    <div class="flex items-center justify-center">
      <VBtn variant="text" class="text-none">
        <MapMarkerIcon />
        Ростов-на-Дону
      </VBtn>
      <v-divider class="border-opacity-100 my-auto" :length="32" vertical />
      <VBtn
        variant="text"
        class="text-none"
        text="Разместить объявление"
        color="#337566"
      />
      <VBtn variant="flat" density="compact" rounded="pill" class="px-0">
        <div class="flex items-center justify-between gap-[8px]">
          <MenuBurgerIcon />
          <img :src="data?.url" alt="avatar" :width="40" class="rounded-full" />
        </div>
      </VBtn>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
