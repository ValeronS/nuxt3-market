<script setup lang="ts">
import type { Company, CompanyReview } from '~/utils/types'
import { useRoute } from '#imports'

type Props = {
  productCount?: number
  agentCount?: number
}
defineProps<Props>()

const route = useRoute()

const { data: company } = await useFetch<Company>('/company/get-by-id?id=1')
const { data: companyReview } = await useFetch<CompanyReview>(
  '/company/company-review?id=1',
)

const isPhoneVisible = ref<boolean>(false)

const isCurrentPage = (path: string) =>
  route.path === path ? 'outlined' : 'flat'
</script>

<template>
  <header class="header">
    <div class="flex flex-col items-center gap-[12px] overflow-x-auto">
      <div class="hidden md:flex flex-col gap-[24px]">
        <img :src="company?.logoUrl" alt="avatar" :width="120" />
        <h3>{{ company?.name }}</h3>
      </div>

      <SharedReviewBlock :review="companyReview" class="hidden md:flex" />

      <div class="hidden md:block">
        <VBtn color="#337566" class="mt-[12px] text-none !font-medium">
          <span
            v-if="!isPhoneVisible"
            @click="isPhoneVisible = !isPhoneVisible"
          >
            Показать номер телефона
          </span>
          <span v-else>{{ formatPhone(company?.phone) }}</span>
        </VBtn>
      </div>

      <div class="flex items-center gap-[8px] mt-[8px] ml-[30px] md:mt-[20px]">
        <NuxtLink id="HomeLink" :to="AppUrls.home.path">
          <VBtn
            :text="`Товары и услуги ${productCount ? productCount : ''}`"
            :height="40"
            :variant="isCurrentPage(AppUrls.home.path)"
            class="btn text-none"
          />
        </NuxtLink>
        <NuxtLink id="AgentsLink" :to="AppUrls.agents.path">
          <VBtn
            :text="`Агенты ${agentCount ? agentCount : ''}`"
            :height="40"
            :variant="isCurrentPage(AppUrls.agents.path)"
            class="btn text-none"
          />
        </NuxtLink>
        <NuxtLink id="AboutCompanyLink" :to="AppUrls.aboutCompany.path">
          <VBtn
            text="О компании"
            :height="40"
            :variant="isCurrentPage(AppUrls.aboutCompany.path)"
            class="btn text-none"
          />
        </NuxtLink>
      </div>
    </div>

    <VDivider class="border-opacity-100 mt-[8px] md:mt-[32px]" />
  </header>
</template>

<style scoped lang="scss">
.header {
  .btn {
    @apply md:!px-[24px] !px-[12px] !font-medium !bg-bg-grey-light;
  }
}
</style>
