<script lang="ts" setup>
const props = defineProps({
  message: String,
  onClose: Function,
})
const show = ref(false)
const openModal = () => {
  show.value = true
}
const closeModal = () => {
  show.value = false
}
</script>

<template>
  <button class="btn-secondary" @click="openModal">
    <span class="pointer-events-none">{{ props?.message }}</span>
  </button>
  <div
    v-if="show"
    class="fixed inset-0 flex justify-center opacity-0 items-center pointer-events-auto visible opacity-100"
  >
    <div class="bg-gray-200 bg-opacity-80 b-rounded" style="padding:1em">
      <h3 class="font-bold text-lg">
        Congratulations random Internet user!
      </h3>
      <p class="py-4">
        You've been selected for a chance to get one year of subscription to use Wikipedia for
        free!
      </p>
      <div class="flex">
        <button class="btn-secondary" @click="closeModal">
          hay!
        </button>
      </div>
    </div>
  </div>
</template>
