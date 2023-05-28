<script setup lang="ts">
interface node {
  name: string
  path: string
}
const props = defineProps<{
  list: node[]
  unit: string
}>()
const show = ref(false)
</script>

<template>
  <div btn-secondary flex gap-1.5 h-6 text-center font-550 style="line-height: 1rem;" @click="show = !show">
    <div v-if="!show" i-ri-arrow-right-s-line w-5 h-4 />
    <div v-else i-ri-arrow-down-s-line w-5 h-4 />
    <slot name="title" />
  </div>
  <div v-if="show">
    <div
      v-for="listNode in list" :key="listNode.name" btn-secondary flex gap-2 h-6 text-center font-550
      style="line-height: 0.9rem;"
      @click="navigateTo(`${listNode.path}`)"
    >
      <div ml-2 /> {{ listNode.name }}
    </div>
  </div>
</template>
