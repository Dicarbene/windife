<script setup>
import { useAutoAnimate } from '@formkit/auto-animate/vue'
const [RegisterModal] = useAutoAnimate()
const username = ref('')
const password = ref('')
const data = ref()
const pending = ref(true)
const UserStatus = useUserStore()
const { $toast } = useNuxtApp()
const submit = () => {
  useLazyFetch('/api/login', {
    method: 'POST',
    body: {
      name: username.value,
      password: password.value,
    },
    async onResponse({ request, response, options }) {
      // Process the response data
      data.value = response._data
      UserStatus.value = response._data
      pending.value = false
      $toast.success('Login successful')
      await navigateTo('/')
    },
  })
}
const getUerUnit = () => {
  useLazyFetch('/api/getuserunit', {
    method: 'POST',
    body: {
      name: username.value,
    },
    async onResponse({ request, response, options }) {
      // Process the response data
      data.value = response._data
      UserStatus.value = response._data
      pending.value = false
      await navigateTo('/user/test')
    },
  })
}

watch(UserStatus, async (val) => {
  if (val != null)
    await navigateTo('/user/test')
})
</script>

<template>
  <div>
    <div w-20 h-20 mt-20 />
    <div ref="RegisterModal" p-2 w-full border-rd-2 max-w-80 mx-auto block class="form">
      <FormKit type="form" :submit-attrs="{ inputClass: 'mt-5 btn-primary' }" @submit="submit">
        <FormKit
          v-model="username" label-class="font-bold text-lg" help-class="text-sm text-gray"
          input-class="b-rd-md p-1.5 b-1 b-black" type="text" label="Username" help="Pick a new username."
          validation="required|length:5,15|" validation-visibility="dirty" :validation-messages="{
            matches: 'Must include at least one number',
          }" message-class="text-primary"
        />
        <FormKit
          v-model="password" label-class="font-bold text-lg" help-class="text-sm text-gray"
          input-class="b-rd-md p-1.5 b-1 b-black" type="password" label="Password" name="password"
          help="Pick a new password." validation="required|length:5,15|matches:/[0-9]/" validation-visibility="dirty"
          :validation-messages="{
            matches: 'Must include at least one number',
          }" message-class="text-primary"
        />
      </FormKit>
    </div>
  </div>
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

.heading {
  color: black;
  padding-bottom: 2em;
  text-align: center;
  font-weight: bold;
}

.input {
  border-radius: 5px;
  border: 1px solid whitesmoke;
  background-color: whitesmoke;
  outline: none;
  padding: 0.7em;
  transition: .4s ease-in-out;
}
</style>
