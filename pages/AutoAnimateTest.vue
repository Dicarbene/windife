<script setup>
import { ref } from 'vue'
import { useAutoAnimate } from '@formkit/auto-animate/vue'

const items = ref(['React', 'Vue', 'Svelte', 'Angular'])

function sortAsc() {
  items.value.sort()
}
function sortDesc() {
  items.value.sort().reverse()
}

const [parent] = useAutoAnimate()
</script>

<template>
  <div mt-20 w-20 h-20 />
  <div>
    <button @click="sortAsc">
      Sort A-Z ↑
    </button>
    <button @click="sortDesc">
      Sort Z-A ↓
    </button>
  </div>
  <ul ref="parent">
    <li
      v-for="item in items"
      :key="item"
    >
      {{ item }}
    </li>
  </ul>
</template>
