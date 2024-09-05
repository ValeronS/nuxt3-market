import { AppUrls } from '~/utils/constants'

export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.server) return // для исключения ошибки доступа из серверной части приложения

  const authStore = useAuthStore()
  const token = authStore.getToken() // для работы авторизации нужно принудительно из middleware достучаться до токена

  if (!token && to?.path !== AppUrls.login.path) {
    abortNavigation()
    return navigateTo(AppUrls.login.path)
  }
})
