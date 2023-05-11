<script setup lang="ts">
import { appName } from '~/constants'
useHead({
  title: appName,
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

h1.ce-header {
  --at-apply: text-3xl font-bold;
}

h2.ce-header {
  --at-apply: text-2xl font-semibold
}

h3.ce-header {
  --at-apply: text-xl font-semibold
}

h4.ce-header {
  --at-apply: text-lg font-semibold
}

h5.ce-header {
  --at-apply: text-base font-semibold
}

h6.ce-header {
  --at-apply: text-base font-semibold
}
</style>
