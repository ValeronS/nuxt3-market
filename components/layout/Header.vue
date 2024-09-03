<script setup lang="ts">
import type { Company, CompanyReview } from '~/utils/types'
import { useRoute } from '#imports'

const route = useRoute()

const { data: company } = await useFetch<Company>('/company/company?id=1')
const { data: companyReview } = await useFetch<CompanyReview>(
  '/company/company-review?id=1',
)

const isPhoneVisible = ref<boolean>(false)

const isCurrentPage = (path: string) =>
  route.path === path ? 'outlined' : 'flat'
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
        <NuxtLink id="HomeLink" :to="AppUrls.home.path">
          <VBtn
            text="Товары и услуги"
            :height="40"
            :variant="isCurrentPage(AppUrls.home.path)"
            class="text-none !font-medium !bg-bg-grey-light"
          />
        </NuxtLink>
        <NuxtLink id="AgentsLink" :to="AppUrls.agents.path">
          <VBtn
            text="Агенты"
            :height="40"
            :variant="isCurrentPage(AppUrls.agents.path)"
            class="text-none !font-medium !bg-bg-grey-light"
          />
        </NuxtLink>
        <NuxtLink id="AboutCompanyLink" :to="AppUrls.aboutCompany.path">
          <VBtn
            text="О компании"
            :height="40"
            :variant="isCurrentPage(AppUrls.aboutCompany.path)"
            class="text-none !font-medium !bg-bg-grey-light"
          />
        </NuxtLink>
      </div>
    </div>

    <VDivider class="border-opacity-100 mt-[32px]" />
  </div>
</template>

<style scoped lang="scss"></style>
