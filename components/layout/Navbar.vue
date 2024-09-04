<script setup lang="ts">
import CategoriesIcon from 'assets/icon/CategiesIcon.vue'
import MapMarkerIcon from 'assets/icon/MapMarkerIcon.vue'
import MenuBurgerIcon from 'assets/icon/MenuBurgerIcon.vue'
import { AppUrls, navigateTo } from '#imports'

const authStore = useAuthStore()

const { data } = await useFetch('/avatar?id=1')

const handleLogout = () => {
  authStore.clearToken()
  navigateTo(AppUrls.login.path)
}
</script>

<template>
  <nav>
    <div
      class="w-full flex items-center justify-between py-[10px] px-[40px] bg-bg-highlight"
    >
      <div class="flex items-center gap-[12px]">
        <div
          class="pr-[25px] text-[28px] leading-[28px] font-noto font-semibold"
        >
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
        <VDivider class="border-opacity-100 my-auto" :length="32" vertical />
        <VBtn
          variant="text"
          class="text-none"
          text="Разместить объявление"
          color="#337566"
        />

        <VMenu>
          <template #activator="{ props }">
            <VBtn
              v-bind="props"
              variant="flat"
              density="compact"
              rounded="pill"
              class="px-0"
            >
              <div class="flex items-center justify-between gap-[8px]">
                <MenuBurgerIcon />
                <img
                  :src="data?.url"
                  alt="avatar"
                  :width="40"
                  class="rounded-full"
                />
              </div>
            </VBtn>
          </template>
          <VList>
            <VListItem title="Выйти" @click="handleLogout" />
          </VList>
        </VMenu>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss"></style>
