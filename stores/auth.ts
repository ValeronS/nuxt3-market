import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', () => {
  const { $locally } = useNuxtApp()

  const token = ref()

  const setToken = (newToken: string) => {
    token.value = newToken
    $locally.setItem('auth-token', newToken)
  }

  // получение токена из localStorage
  const getToken = () => {
    token.value = $locally.getItem('auth-token')
    return token.value
  }

  const clearToken = () => {
    token.value = null
    $locally.setItem('auth-token', '')
  }

  const isLoggedIn = computed(() => !!token.value)

  onMounted(() => getToken())

  return { token, setToken, getToken, clearToken, isLoggedIn }
})
