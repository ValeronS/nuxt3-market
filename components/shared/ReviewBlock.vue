<script setup lang="ts">
import { EReviewStatus, type Review } from '~/utils/types'
import ApprovedIcon from 'assets/icon/ApprovedIcon.vue'
import StarIcon from 'assets/icon/StarIcon.vue'

type Props = {
  review: Review
}
defineProps<Props>()

const DocStatusLabels = {
  [EReviewStatus.approved]: 'Документы проверены',
  [EReviewStatus.rejected]: 'Документы отклонены',
  [EReviewStatus.onReview]: 'Документы на проверке',
}
</script>

<template>
  <div class="flex flex-nowrap items-center gap-[4px]">
    <div
      v-if="review?.reviewStatus === EReviewStatus[EReviewStatus.approved]"
      class="flex flex-nowrap items-center gap-[4px]"
    >
      <ApprovedIcon />
      {{ DocStatusLabels[EReviewStatus.approved] }}
      •
    </div>

    <div v-if="review?.rating" class="flex flex-nowrap items-center gap-[4px]">
      <StarIcon />
      {{ review.rating }}
      •
    </div>

    <div class="flex flex-nowrap items-center gap-[4px]">
      <span v-if="review?.reviewCount">{{
        `${review.reviewCount} ${endingSubstitution(review.reviewCount, [
          'отзыв',
          'отзыва',
          'отзывов',
        ])}`
      }}</span>
      <span v-else>Нет озывов</span>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
