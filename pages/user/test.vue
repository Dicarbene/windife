<script setup>
const default_data = {
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
const dat = ref(default_data)
const show = ref(false)
nuxtapp.hook('page:transition:finish', () => {
  // console.log('page:transition:finish')
  show.value = true
})
const options = ref({
  header: true,
  paragraph: true,
  list: true,
})
</script>

<template>
  <div relative z-0 w-auto flex z-auto>
    <client-only>
      <template #fallback>
        <!-- this will be rendered on server side -->
        <p>Loading comments...</p>
      </template>
      <EditorjsClient v-if="show" v-model:doc-data="dat" v-model:optionsValue="options" absolute z-0 top-10 left-15vw w-75vw />
    </client-only>
  </div>
</template>
