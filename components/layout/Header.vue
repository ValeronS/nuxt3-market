<script setup lang="ts">
import ApprovedIcon from 'assets/icon/ApprovedIcon.vue'
import StarIcon from 'assets/icon/StarIcon.vue'
import { type Company, type CompanyReview, EDocStatus } from '~/utils/types'

const DocStatusLabels = {
  [EDocStatus.approved]: 'Документы проверены',
  [EDocStatus.rejected]: 'Документы отклонены',
  [EDocStatus.onReview]: 'Документы на проверке',
}

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
      <div class="flex items-center gap-[4px]">
        <div
          v-if="companyReview?.docStatus === EDocStatus[EDocStatus.approved]"
          class="flex items-center gap-[4px]"
        >
          <ApprovedIcon />
          {{ DocStatusLabels[EDocStatus.approved] }}
          •
        </div>
        <div v-if="companyReview?.rating" class="flex items-center gap-[4px]">
          <StarIcon />
          {{ companyReview.rating }}
          •
        </div>
        <div
          v-if="companyReview?.reviewCount !== undefined"
          class="flex items-center gap-[4px]"
        >
          {{
            `${companyReview.reviewCount} ${endingSubstitution(
              companyReview.reviewCount,
              ['отзыв', 'отзыва', 'отзывов'],
            )}`
          }}
        </div>
      </div>

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
          variant="flat"
          class="text-none !font-medium"
        />
        <VBtn
          text="Агенты"
          :height="40"
          variant="flat"
          class="text-none !font-medium"
        />
        <VBtn
          text="О компании"
          :height="40"
          variant="flat"
          class="text-none !font-medium"
        />
      </div>
    </div>

    <VDivider class="border-opacity-100 mt-[32px]" />
  </div>
</template>

<style scoped lang="scss"></style>
