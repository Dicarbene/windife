// plugins/sonner.client.ts
import { EditorjsClient } from '@dicarbene/vue-editorjs'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('EditorjsClient', EditorjsClient)
})
