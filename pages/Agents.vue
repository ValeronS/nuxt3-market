<script setup lang="ts">
import type { AgentPerson } from '~/utils/types'
import { storeToRefs } from '#imports'

definePageMeta({
  middleware: 'auth',
})

const { data: agentPerson } = await useFetch<AgentPerson[]>('/agent/list')

const { isLoggedIn } = storeToRefs(useAuthStore())
</script>

<template>
  <div class="w-full h-full flex flex-col gap-[24px] sm:gap-[32px]">
    <LayoutHeader :agent-count="agentPerson?.length" />

    <div v-if="isLoggedIn" class="flex justify-center">
      <div
        class="w-screen sm:min-w-[560px] sm:max-w-[600px] flex flex-col gap-[12px]"
      >
        <AgentCard
          v-for="person in agentPerson"
          :key="person.id"
          :agent-person="person"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
