<script setup lang="ts">
import { EProductStatus, type Product } from '~/utils/types'
import ImageNotFoundIcon from 'assets/icon/ImageNotFoundIcon.vue'
import EyeIcon from 'assets/icon/EyeIcon.vue'
import CalendarIcon from 'assets/icon/CalendarIcon.vue'

type Props = {
  product: Product
}
defineProps<Props>()

type Emits = {
  (e: 'add-to-cart', v: Product): void
}
const emit = defineEmits<Emits>()

const ProductStatusLabels = {
  [EProductStatus.promote]: 'продвигается',
  [EProductStatus.hidden]: 'скрыто',
}

const handlePromote = (id: Product['id']) => {
  console.log('handlePromote', id)
}
</script>

<template>
  <div
    v-if="product"
    class="relative w-screen sm:w-[430px] flex flex-col items-center px-[16px] md:p-[8px]"
  >
    <div
      v-if="product.status !== EProductStatus.hidden"
      class="absolute w-[calc(100%-40px)] top-[16px] left-[16px] z-[2] flex items-center justify-between"
    >
      <div class="flex gap-[4px]">
        <div class="chip">
          <EyeIcon />
          <span>
            {{ formatPrice(product.views, '') }}
          </span>
        </div>
        <div v-if="product.createdAt" class="chip">
          <CalendarIcon />
          <span>
            {{
              `${calculateDaysBehind(product.createdAt)} ${endingSubstitution(calculateDaysBehind(product.createdAt), ['день', 'дня', 'дней'])}`
            }}
          </span>
        </div>
      </div>

      <VMenu>
        <template #activator="{ props }">
          <div class="profile-btn">
            <VBtn
              v-bind="props"
              variant="outlined"
              text="Действия"
              :height="32"
              class="text-none px-0 !text-[13px] text-primary !font-medium !bg-bg-light !border-bg-grey"
            />
          </div>
        </template>
        <VList>
          <VListItem title="В корзину" @click="emit('add-to-cart', product)" />
          <VListItem title="В избранное" />
          <VDivider class="border-opacity-100" />
          <VListItem title="Пожаловаться" />
        </VList>
      </VMenu>
    </div>

    <img
      v-if="product?.imageUrl"
      :src="product.imageUrl"
      alt="product-image"
      class="rounded-[20px]"
    />
    <div
      v-else
      class="w-full h-[322px] flex items-center justify-center bg-bg-grey-light rounded-[20px]"
    >
      <ImageNotFoundIcon />
    </div>

    <div class="w-full flex flex-col gap-[12px] mt-[16px]">
      <span class="text-[17px] leading-[20px] font-medium">
        {{ formatPrice(product.price) }}
      </span>
      <span class="text-[15px] leading-[24px] font-medium">
        {{ product.title }}
      </span>
    </div>
    <VDivider class="border-opacity-100 w-full mt-[8px]" />

    <div class="w-full mt-[12px] text-center">
      <div
        v-if="product.status"
        class="h-[40px] flex items-center justify-center"
      >
        <span
          :class="{ 'text-red': product.status === EProductStatus.hidden }"
          class="text-[15px] text-accent"
        >
          {{ `Объявление ${ProductStatusLabels[product.status]}` }}
        </span>
      </div>
      <div v-else class="flex items-center justify-between">
        <span class="text-[13px] text-bg-grey-dark">
          Увеличьте количество просмотров
        </span>
        <VBtn
          :height="40"
          base-color="#337566"
          text="Продвигать"
          class="text-none !px-[12px]"
          @click="handlePromote(product.id)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chip {
  @apply flex items-center gap-[8px] py-[4px] px-[8px] bg-primary-dark-60 rounded-[12px];

  & span {
    @apply text-[13px] leading-[20px] font-medium text-bg-light;
  }
}
</style>
