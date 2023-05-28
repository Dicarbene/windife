<script setup lang="ts">
const userStore = useUserStore()
const units = useUnitStore()
const pages = ref(null)
if (userStore.value !== null && units.value === null) {
  units.value = useFetch('/api/UnitAll', {
    method: 'GET',
    query: {
      user: userStore.value.name,
    },
    async onResponse({ request, response, options }) {
    // Process the response data
      units.value = response._data
      for (let i = 0; i < units.value.length; ++i) {
        units.value[i].pages = []
        const { data } = await useFetch('/api/pageAll', {
          method: 'GET',
          query: {
            unit: units.value[i].name,
          },
        })
        // units.value[i].pages.push(data.value)
        for (let j = 0; j < data.value.length; ++j)
          units.value[i].pages.push({ name: data.value[j].name.toString(), path: `/unit/${units.value[i].name}/page-${data.value[j].name.toString()}` })
      }
    },
  })
}
</script>

<template>
  <div>
    <DropDown v-for="unit in units" :key="unit.id" :list="unit.pages">
      <template #title>
        {{ unit.name }}
      </template>
    </DropDown>
  </div>
</template>

<style scoped>

</style>
