export default defineNuxtRouteMiddleware((to) => {
  const { $config } = useNuxtApp()
  if ($config)
    return '/secret'
})
