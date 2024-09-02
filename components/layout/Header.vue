<script setup lang="ts">
import type { Company, CompanyReview } from '~/utils/types'
import { useRoute, useRouter } from '#imports'

const route = useRoute()
const router = useRouter()

const { data: company } = await useFetch<Company>('/company?id=1')
const { data: companyReview } = await useFetch<CompanyReview>(
  '/company-review?id=1',
)

const isPhoneVisible = ref<boolean>(false)
</script>

<template>
  <div>
    <div class="flex flex-col items-center gap-[12px]">
      <div class="flex flex-col gap-[24px]">
        <img :src="company?.logoUrl" alt="avatar" :width="120" />
        <h3>{{ company?.name }}</h3>
      </div>

      <SharedReviewBlock :review="companyReview" />

      <VBtn color="#337566" class="mt-[12px] text-none !font-medium">
        <span v-if="!isPhoneVisible" @click="isPhoneVisible = !isPhoneVisible">
          Показать номер телефона
        </span>
        <span v-else>{{ formatPhone(company?.phone) }}</span>
      </VBtn>

      <div class="flex items-center gap-[8px] mt-[20px]">
        <VBtn
          text="Товары и услуги"
          :height="40"
          :variant="route.name === AppUrls.home.name ? 'outlined' : 'flat'"
          class="text-none !font-medium !bg-bg-grey-light"
          @click="router.push(AppUrls.home.path)"
        />
        <VBtn
          text="Агенты"
          :height="40"
          :variant="route.name === AppUrls.agents.name ? 'outlined' : 'flat'"
          class="text-none !font-medium !bg-bg-grey-light"
          @click="router.push(AppUrls.agents.path)"
        />
        <VBtn
          text="О компании"
          :height="40"
          :variant="route.name === AppUrls.about.name ? 'outlined' : 'flat'"
          class="text-none !font-medium !bg-bg-grey-light"
          @click="router.push(AppUrls.aboutCompany.path)"
        />
      </div>
    </div>

    <VDivider class="border-opacity-100 mt-[32px]" />
  </div>
</template>

<style scoped lang="scss"></style>
