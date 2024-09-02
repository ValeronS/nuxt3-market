export default defineNuxtRouteMiddleware((to) => {
  const router = useRouter()

  const matchedRoute = router.resolve(to.path)

  if (!matchedRoute.matched.length) return navigateTo('/home')
})
