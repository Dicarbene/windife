<script setup lang="ts">
import annyang from 'annyang'
const nuxtApp = useNuxtApp()
const start = () => annyang.start({ autoRestart: false, continuous: false })
const pause = () => annyang.pause()
const stop = () => annyang.abort()

const show = ref(false)
const result = ref('')
const openModal = () => {
  show.value = true
}
const closeModal = () => {
  show.value = false
}
nuxtApp.hook('app:mounted', () => {
  annyang.addCallback('error', () => {
    result.value = 'There was an error!'
  })
  annyang.addCallback('errorNetwork', () => {
    result.value = 'A network error occurred.'
  })
  annyang.addCallback('resultMatch', (userSaid: string, commandText, phrases) => {
    result.value = userSaid
  })
})
</script>

<template>
  <div btn-secondary flex gap-2 h-6 text-center style="line-height: 0.9rem;" @click="openModal">
    <div i-ri-voiceprint-line />Speech Recongnitions
  </div>
  <Teleport v-if="show" to="body">
    <div
      class="fixed w-full h-full inset-0 flex justify-center items-center pointer-events-auto visible backdrop-blur z-99 transition"
    >
      <div class="bg-gray-200 bg-opacity-80 b-rounded form z-100 fixed " style="padding:1em">
        <h3 flex class="font-bold text-lg">
          <div i-ri-voiceprint-line />Speech recognition | 语音识别
        </h3>
        <p class="py-4 flex justify-center">
          <button btn-secondary flex gap-2 h-6 text-center style="line-height: 0.9rem;" @click="start">
            start
          </button>
          <button btn-secondary flex gap-2 h-6 text-center text-red style="line-height: 0.9rem;" @click="stop">
            stop
          </button>
          <button btn-secondary flex gap-2 h-6 text-center text-gray-300 style="line-height: 0.9rem;" @click="pause">
            pause
          </button>
        </p>
        <p>
          <span>Result: {{ result }}</span>
        </p>
        <div class="flex">
          <button class="btn-secondary" @click="closeModal">
            Close
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: white;
  padding: 2.5em;
  border-radius: 25px;
  transition: .4s ease-in-out;
  box-shadow: #121212 1px 2px 2px;
}

.form:hover {
  transform: translateX(-0.5em) translateY(-0.5em);
  border: 1px solid #121212;
  box-shadow: 10px 10px 0px #333333;
}
</style>
