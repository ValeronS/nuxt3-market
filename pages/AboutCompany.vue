<script setup lang="ts">
import ArrowMenuDownIcon from 'assets/icon/ArrowMenuDownIcon.vue'
import MapBlock from '~/components/shared/MapBlock.vue'
import type { CompanyAbout, CompanyReview } from '~/utils/types'
import { daysOfWeek } from '~/utils/constants'

const { data: company } = await useFetch<Company>('/company/get-by-id?id=1')
const { data: companyReview } = await useFetch<CompanyReview>(
  '/company/company-review?id=1',
)
const { data: companyAbout } = await useFetch<CompanyAbout>(
  '/company/company-about?id=1',
)

const todaySchedule = computed(() => {
  // определение и подстановка расписания на текущий день
  const todayIndex = new Date().getDay() // индекс дня недели (0 - Воскресенье, 6 - Суббота)
  const today = daysOfWeek[todayIndex] // название дня недели
  const item = companyAbout.value?.schedule.find((i) =>
    i.title.startsWith(today),
  ) // элемент расписания с сегодняшним днем
  return item ? item.value : 'Расписание не указано'
})
</script>

<template>
  <div class="w-full h-full flex flex-col gap-[32px]">
    <LayoutHeader />

    <div v-if="companyAbout" class="w-screen sm:w-[560px] mx-auto">
      <div class="flex flex-col">
        <div class="flex md:hidden items-center flex-col gap-[24px]">
          <img :src="company?.logoUrl" alt="avatar" :width="120" />
          <h3>{{ company?.name }}</h3>
          <SharedReviewBlock :review="companyReview" />
        </div>

        <div class="p-[20px]">
          <h3 class="text-[20px] sm:text-[24px] mb-[8px]">О компании</h3>
          <p class="text-[15px] sm:text-[17px] leading-[28px] mb-[12px]">
            {{ companyAbout.description }}
          </p>
        </div>

        <v-menu>
          <template #activator="{ props }">
            <v-btn
              color="#F5F5F5"
              variant="flat"
              v-bind="props"
              class="!flex !justify-between text-none opacity-30"
              :height="104"
            >
              <div class="flex flex-col items-start gap-[8px]">
                <span
                  class="text-[20px] sm:text-[24px] leading-[28px] font-semibold"
                >
                  Режим работы
                </span>
                <span>Сегодня {{ todaySchedule }}</span>
              </div>
              <template #append>
                <ArrowMenuDownIcon />
              </template>
            </v-btn>
          </template>
          <VList>
            <VListItem
              v-for="(item, index) in companyAbout.schedule"
              :key="index"
            >
              <VListItemTitle class="last:!text-red">
                {{ `${item.title} ${item.value}` }}
              </VListItemTitle>
            </VListItem>
          </VList>
        </v-menu>

        <div
          class="flex flex-col sm:flex-row items-center justify-between mt-[12px]"
        >
          <div class="flex flex-col justify-center gap-[8px] p-[20px]">
            <h3 class="text-[20px] sm:text-[24px]">Местоположение</h3>
            <span class="text-[15px] sm:text-[17px] leading-[28px] text-accent">
              {{ companyAbout.address }}
            </span>
          </div>
          <MapBlock
            :latitude="companyAbout.latitude"
            :longitude="companyAbout.longitude"
            height="132px"
            class="company-map w-screen sm:w-[300px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.company-map:deep(.ymaps3x0--main-engine-container) {
  // изменение радиуса контейнера карты. Делается вне блока карты для возможности переиспользования
  border-radius: 0 16px 16px 0;
}
</style>
