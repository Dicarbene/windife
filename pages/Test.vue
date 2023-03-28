<script setup lang="ts">
const userObj = {
  name: 'zzz',
  password: 'password',
}
const { pending, data } = await useLazyFetch('/api/login', {
  method: 'POST',
  body: userObj,
})
</script>

<template>
  <div mt-20>
    <div v-if="pending">
      Loading ...
    </div>
    <div v-else>
      {{ data }}
    </div>
  </div>
</template>
