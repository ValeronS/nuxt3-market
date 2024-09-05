import { AppUrls } from '~/utils/constants'

export default defineNuxtRouteMiddleware((to) => {
  const router = useRouter()
  // редирект при некорректном URL
  const matchedRoute = router.resolve(to.path)

  if (!matchedRoute.matched.length) return navigateTo(AppUrls.home.path)
})
