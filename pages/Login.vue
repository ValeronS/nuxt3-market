<script setup lang="ts">
import type { BackendError } from '~/utils/types'
import { AppUrls, navigateTo } from '#imports'

const authStore = useAuthStore()

const username = ref<string>('')
const password = ref<string>('')
const errorMessage = ref<string | null>(null)

const login = async () => {
  try {
    const { token } = await $fetch('/auth/login', {
      method: 'POST',
      body: { username: username.value, password: password.value },
    })
    authStore.setToken(token)
    navigateTo(AppUrls.home.path)
  } catch (e) {
    const error = e as BackendError
    if (error.data?.statusMessage) errorMessage.value = error.data.statusMessage
  }
}

watch([username, password], () => {
  if (errorMessage.value) errorMessage.value = null // сброс ошибки при изменении введенных данных
})
</script>

<template>
  <div class="h-full flex justify-center align-center">
    <VCard variant="flat" :width="500">
      <VCardTitle class="text-center">Авторизация</VCardTitle>

      <VCardText>
        <VForm @submit.prevent="login">
          <VTextField
            v-model="username"
            label="Логин"
            prepend-icon="mdi-account"
            required
          />

          <VTextField
            v-model="password"
            label="Пароль"
            prepend-icon="mdi-lock"
            type="password"
            required
          />

          <VBtn type="submit" color="#337566" class="mt-4" block> Войти </VBtn>
        </VForm>

        <VAlert v-if="errorMessage" type="error" class="mt-3">
          {{ errorMessage }}
        </VAlert>
      </VCardText>
    </VCard>
  </div>
</template>

<style scoped lang="scss"></style>
