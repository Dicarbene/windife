export default defineNuxtRouteMiddleware((to, from) => {
  const nuxtApp = useNuxtApp()
  const userStore = useUserStore()
  if (userStore === null)
    return abortNavigation()
  nuxtApp.hook('page:transition:finish', () => {
    const { $toast } = useNuxtApp()
    const userStatus = useUserStore()

    if (userStatus === null && to.path === '/user/test')
      __unctx__.get('nuxt-app').tryUse().$toast.error('test')
  })
  // return abortNavigation()
})
