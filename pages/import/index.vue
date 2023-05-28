<script setup lang="ts">
const input = ref('')
</script>

<template>
  <div fixed z-0 top-10 left-15vw w-75vw>
    <div w-100 h-40 absolute flex flex-row class="top-30% left-30%">
      <div h-10>
        <div class="inline-flex relative w-30ch h-10">
          <button btn-secondary>
            导入数据
          </button>
          <button btn-secondary>
            Page: <span text-teal>test1</span>
          </button>
        </div>
        <textarea id="story" name="story" cols="50" rows="25" b-1 b-black rounded>
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
    }
  ]
        </textarea>
        <button h-10 btn-primary text-center>
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
