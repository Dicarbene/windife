<script setup lang="ts">
import { saveAs } from 'file-saver'
const route = useRoute()
const pagename = ref('')
const defaultData = {
  time: 1660335428612,
  blocks: [
    {
      id: 'MnGi61oxdF',
      type: 'header',
      data: {
        text: 'Welcome to windife!',
        level: 1,
      },
    },
    {
      id: 'b_Ju7U6wPl',
      type: 'paragraph',
      data: {
        text: 'This is windife, a scalable and multi-platform personal knowledge app.',
      },
    },
    {
      id: 'R3o5BpI-r9',
      type: 'paragraph',
      data: {
        text: '<b>A paragraph of text:</b>&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perspiciatis molestias neque autem cumque provident? Laudantium ad, quisquam quos nulla amet, perferendis recusandae voluptates eligendi cupiditate consectetur veniam! Ipsum, ullam?',
      },
    },
    {
      id: 'b9mkw6ZO92',
      type: 'header',
      data: {
        text: 'Heading 1',
        level: 1,
      },
    },
    {
      id: 'P2PZsHo2lq',
      type: 'header',
      data: {
        text: 'Heading 2',
        level: 2,
      },
    },
    {
      id: 'hHJZjkW-TO',
      type: 'header',
      data: {
        text: 'Heading 3',
        level: 3,
      },
    },
    {
      id: 'k8EDwa0oVG',
      type: 'header',
      data: {
        text: 'Heading 4',
        level: 4,
      },
    },
    {
      id: '62ciFnEFjZ',
      type: 'header',
      data: {
        text: 'Heading 5',
        level: 5,
      },
    },
    {
      id: 'YCBcKhNqib',
      type: 'header',
      data: {
        text: 'Heading 6',
        level: 6,
      },
    },
    {
      id: 's_J3d5U8DA',
      type: 'list',
      data: {
        style: 'ordered',
        items: [
          'An ordered list item',
          'Another ordered list item',
          'One more',
        ],
      },
    },
    {
      id: 'kMyQbO156y',
      type: 'list',
      data: {
        style: 'unordered',
        items: ['An unordered list item!', 'In italics?', 'Or bold?'],
      },
    },
  ],
  version: '2.25.0',
}
const nuxtapp = useNuxtApp()
const pageData = ref(defaultData)
const show = ref(false)
nuxtapp.hook('page:transition:finish', () => {
  useFetch('/api/page', {
    method: 'get',
    query: {
      id: route.params.id,
    },
    onResponse({ response }) {
      pagename.value = response._data.name
      pageData.value = response._data.data
    },
  })
  show.value = true
})
const options = ref({
  header: true,
  paragraph: true,
  list: true,
})
const save = () => {
  nuxtapp.hook('app:mounted', () => {
    console.log(`${pageData.value}`)
  })
}
const exportJSON = () => {
  const file = new File([`${pageData.value}`], `${route.params.unit}-${pagename.value}.json`, { type: 'application/json;charset=utf-8' })
  saveAs(file)
}
</script>

<template>
  <div relative z-0 w-auto flex z-auto>
    <button
      btn-secondary fixed top-2 right-30 flex gap-2 h-6 text-center style="line-height: 0.9rem;"
      @click="exportJSON"
    >
      <div i-ri-javascript-line />Export JSON
    </button>
    <button
      btn-secondary fixed top-2 right-60 flex gap-2 h-6 text-center style="line-height: 0.9rem;"
      @click="save"
    >
      <div i-ri-pages-line />Save Data
    </button>
    <button
      fixed top-2 right-90
    >
      <ClientOnly>
        <SpeechRecognition />
      </ClientOnly>
    </button>
    <client-only>
      <template #fallback>
        <!-- this will be rendered on server side -->
        <p>Loading comments...</p>
      </template>
      <EditorjsClient v-if="show" v-model:doc-data="pageData" v-model:optionsValue="options" v-model:changeAPI="save" v-model:saveAPI="save" absolute z-0 top-10 left-15vw w-75vw />
    </client-only>
  </div>
</template>
