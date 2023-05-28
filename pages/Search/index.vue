<script lang="ts" setup>
const input = ref('')
const show = ref(false)
const result = ref([{ id: 1, name: 'test' }, { id: 2, name: 'test2 with lions' }])
const search = async () => {
  await useFetch('/api/searchPage', {
    method: 'POST',
    body: {
      name: input.value,
      user: useUserStore().value,
    },
    async onResponse({ request, response, options }) {
      // Process the response data
      show.value = true
    },
  })
}
</script>

<template>
  <div fixed z-0 top-10 left-15vw w-75vw>
    <div w-100 h-40 absolute grid="~ grid-cols-[30ch,1fr] grid-rows-[auto,1fr]" class="top-30% left-30%">
      <div h-10>
        <div class="inline-flex relative w-30ch h-10">
          <input
            id="id" v-model="input" type="text" spellcheck="false" autocomplete="off" autocapitalize="none"
            placeholder="输入您要搜索的内容" name="name" class="self-end w-full h-full truncate m-0 px-4 text-black outline-none"
            border="solid b-[4px]" bg="gray-300 focus:gray-100"
          >
        </div>
        <button h-10 btn-primary text-center @click="search">
          Search
        </button>
      </div>
      <div v-if="show">
        <div v-for="page in result" :key="page.id" flex gap-2 text-center h-10 w-90 bg-gray-100 btn-secondary>
          <div i-ri-file-list-3-line w-6 h-10 />{{ page.name }}
        </div>
      </div>
    </div>
  </div>
</template>
