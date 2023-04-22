<script setup lang="ts">

</script>

<template>
  <header v-if="userStore != null" fixed left-2 top-1 w-58 h-100vh b-r bg-gray-50>
    <button relative flex rounded btn-primary hover:bg-gray-200 bg-gray-200 text-black text-center h-10 w-auto>
      <span rounded bg-gray-300 w-6 h-6 inline-block left-2>{{ userStore?.name.slice(0, 1).toUpperCase()
      }}</span>{{ userStore?.name }}
      <div i-carbon-chevron-down w-6 h-6 bg-gray />
    </button>
    <div class="grid-rows-[repeat(10,1.5rem)]" mt-2 grid gap-0.5 px-2 text-gray-6>
      <div btn-secondary flex gap-2 h-6 text-center style="line-height: 0.9rem;">
        <div i-carbon-search top-0.5 />Search
      </div>
      <div btn-secondary flex gap-2 h-6 text-center style="line-height: 0.9rem;">
        <div i-carbon-time />Update
      </div>
      <div btn-secondary flex gap-2 h-6 text-center style="line-height: 0.9rem;">
        <div i-carbon-settings />Settings
      </div>
      <div btn-secondary flex gap-2 h-6 text-center style="line-height: 1rem;">
        <button
          class="btn-tertiary" i-carbon-chevron-right active:i-carbon-chevron-down
          style="line-height: 1rem;"
        />recipes
      </div>
      <div btn-secondary>
        recipes
      </div>
      <div btn-secondary>
        recipes
      </div>
    </div>
  </header>
  <slot />
</template>
