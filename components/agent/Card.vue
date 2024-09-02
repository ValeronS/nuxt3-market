<script setup lang="ts">
import type { AgentPerson } from '~/utils/types'
import ImageNotFoundIcon from 'assets/icon/ImageNotFoundIcon.vue'

type Props = {
  agentPerson: AgentPerson
}
defineProps<Props>()
</script>

<template>
  <div
    v-if="agentPerson"
    class="flex gap-[20px] p-[20px] bg-bg-light rounded-[20px]"
  >
    <img
      v-if="agentPerson.imageUrl"
      :src="agentPerson.imageUrl"
      alt="agent-person"
      :width="140"
      :height="140"
      class="rounded-[20px]"
    />
    <div
      v-else
      class="w-[140px] min-w-[140px] h-[140px] flex items-center justify-center bg-bg-grey-light rounded-[20px]"
    >
      <ImageNotFoundIcon />
    </div>

    <div class="flex flex-col">
      <span class="mb-[4px] text-[24px] leading-[28px] font-semibold">
        {{ agentPerson.name }}
      </span>

      <SharedReviewBlock :review="agentPerson" class="mb-[12px]" />

      <span :title="agentPerson.description" class="description">
        {{ agentPerson.description }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.description {
  // ограничение описания тремя строками и установка многоточия
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>
