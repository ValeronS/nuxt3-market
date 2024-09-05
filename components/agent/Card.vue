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
    class="flex flex-col p-[20px] bg-bg-light rounded-[20px]"
  >
    <div class="flex gap-[12px] sm:gap-[20px]">
      <img
        v-if="agentPerson.imageUrl"
        :src="agentPerson.imageUrl"
        alt="agent-person"
        class="rounded-[12px] sm:rounded-[20px] w-[48px] h-[48px] sm:w-[140px] sm:h-[140px]"
      />
      <div
        v-else
        class="w-[140px] min-w-[140px] h-[140px] flex items-center justify-center bg-bg-grey-light rounded-[20px]"
      >
        <ImageNotFoundIcon />
      </div>

      <div class="flex flex-col">
        <span
          class="mb-[4px] text-[20px] sm:text-[24px] leading-[28px] font-semibold"
        >
          {{ agentPerson.name }}
        </span>

        <SharedReviewBlock :review="agentPerson" class="mb-[12px]" />

        <span
          :title="agentPerson.description"
          class="description text-[15px] hidden sm:[display:-webkit-box]"
        >
          {{ agentPerson.description }}
        </span>
      </div>
    </div>

    <span
      :title="agentPerson.description"
      class="description text-[15px] [display:-webkit-box] sm:hidden"
    >
      {{ agentPerson.description }}
    </span>
  </div>
</template>

<style scoped lang="scss">
.description {
  // ограничение описания тремя строками и установка многоточия, работает только с [display:-webkit-box]
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>
