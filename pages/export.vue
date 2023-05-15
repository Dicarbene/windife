<script setup lang="ts">
/* const uploading = ref(false)
const src = ref('')
const files = ref()
const uploadAvatar = async (evt) => {
  files.value = evt.target.files
  try {
    uploading.value = true

    if (!files.value || files.value.length === 0)
      throw new Error('You must select an image to upload.')

    const file = files.value[0]
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    const filePath = `${fileName}`

    const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file)

    if (uploadError)
      throw uploadError

    emit('update:path', filePath)
    emit('upload')
  }
  catch (error) {
    alert(error.message)
  }
  finally {
    uploading.value = false
  }
} */
</script>

<template>
  <div />
</template>

<style scoped>

</style>
