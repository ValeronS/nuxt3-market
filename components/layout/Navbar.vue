<script setup lang="ts">
import CategoriesIcon from 'assets/icon/CategiesIcon.vue'
import MapMarkerIcon from 'assets/icon/MapMarkerIcon.vue'
import MenuBurgerIcon from 'assets/icon/MenuBurgerIcon.vue'
import { AppUrls, navigateTo, storeToRefs } from '#imports'
import CartIcon from 'assets/icon/CartIcon.vue'
import { useCartStore } from '~/stores/cart'

const authStore = useAuthStore()
const { cart } = storeToRefs(useCartStore())

const { data } = await useFetch('/user/get-by-id?id=1')

const handleLogout = () => {
  authStore.clearToken()
  navigateTo(AppUrls.login.path)
}
</script>

<template>
  <nav>
    <div
      class="w-full flex items-center justify-between py-[10px] px-[16px] md:px-[40px] bg-bg-highlight"
    >
      <div
        class="w-full flex items-center justify-between md:justify-start gap-[12px]"
      >
        <div class="md:hidden">
          <VMenu>
            <template #activator="{ props }">
              <div class="menu-btn">
                <VBtn v-bind="props" variant="text" :height="30" class="!px-0">
                  <MenuBurgerIcon />
                </VBtn>
              </div>
            </template>
            <VList>
              <VListItem :title="data?.name" />
              <VDivider class="border-opacity-100" />
              <VListItem title="Выйти" @click="handleLogout" />
            </VList>
          </VMenu>
        </div>

        <NuxtLink
          id="BrandLink"
          :to="AppUrls.home.path"
          class="pr-[32px] md:pr-[25px] text-[28px] leading-[28px] font-noto font-semibold"
        >
          Annoncé
        </NuxtLink>
        <div class="hidden lg:block">
          <VBtn
            :height="40"
            rounded="xl"
            text="Все категории"
            variant="flat"
            class="text-none"
          >
            <template #prepend>
              <categories-icon />
            </template>
          </VBtn>
        </div>
      </div>

      <div class="items-center justify-center hidden md:flex">
        <VBtn variant="text" class="text-none">
          <MapMarkerIcon />
          {{ data?.city }}
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
            <div class="profile-btn">
              <VBtn
                v-bind="props"
                variant="flat"
                rounded="xl"
                :height="48"
                class="px-0"
              >
                <div class="flex items-center justify-between gap-[8px]">
                  <MenuBurgerIcon />
                  <img
                    :src="data?.imageUrl"
                    alt="avatar"
                    :width="40"
                    class="rounded-full"
                  />
                </div>
              </VBtn>
            </div>
          </template>
          <VList>
            <VListItem :title="data?.name" />
            <VDivider class="border-opacity-100" />
            <VListItem title="Выйти" @click="handleLogout" />
          </VList>
        </VMenu>
      </div>

      <div class="relative">
        <span
          v-if="cart?.size"
          class="absolute top-[-5px] right-[-9px] py-[3px] px-[6px] text-[11px] leading-[12px] text-bg-light font-semibold bg-accent border-[2px] border-bg rounded-full"
          >{{ cart.size }}</span
        >
        <CartIcon class="block md:hidden" />
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.menu-btn:deep(.v-btn--size-default) {
  min-width: 30px !important;
  width: 30px !important;
}
.profile-btn:deep(.v-btn--size-default) {
  min-width: 82px !important;
}
</style>
