<script lang="ts" setup>
const nuxtApp = useNuxtApp()
const userStore = useUserStore()
const show = ref(false)
const createCat = ref(false)
const switchCat = () => createCat.value = !createCat.value
const openModal = () => show.value = true
const closeModal = () => show.value = false

const unitData = ref({
  name: '',
  user: '',
  options: '',
})
const pagename = ref('')
const unitList = ref([])

const updateUnitList = () => {
  useFetch('/api/UnitAll', {
    method: 'GET',
    query: {
      user: userStore.value?.name,
    },
    async onResponse({ request, response, options }) {
    // Process the response data
      const units = response._data
      for (let i = 0; i < units.value.length; ++i)
        unitList.value.push(units.value[i].name)
    },
  })
}
const createPage = () => {
  useFetch('/api/page', {
    method: 'post',
    body: {
      name: pagename,
      author: useUserStore()?.value?.name,
      unit: unitData.value.name,
    },
  })
}
const createUnit = () => {

}
/* nuxtApp.hook('page:transition:finish', () => {
  if (units.value !== null) {
    for (let i = 0; i < units.length; ++i)
      unitList.value.push(units.value[i].name)
  }
}) */
</script>

<template>
  <div i-ri-edit-box-line @click="openModal" />
  <Teleport v-if="show" to="body">
    <div
      class="fixed w-full h-full inset-0 flex justify-center items-center pointer-events-auto visible backdrop-blur z-99 transition"
    >
      <div class="bg-gray-200 bg-opacity-80 b-rounded form z-100 fixed " style="padding:1em">
        <h3 class="font-bold text-lg">
          Create Unit and Page | 创建单元与页面
        </h3>
        <div v-if="!createCat">
          <p py-4 btn-secondary text-lg @click="switchCat">
            Unit|单元
          </p>
        </div>

        <div v-if="createCat">
          <p py-4 btn-secondary text-lg @click="switchCat">
            Page | 页面
          </p>
          <FormKit type="form" :submit-attrs="{ inputClass: 'mt-5 btn-primary' }" @submit="createPage">
            <FormKit
              type="select"
              label="Select your unit. 选择你的单元"
              name="unit selection"
              :options="unitList"
              @click="updateUnitList"
            />
            <FormKit
              v-model="pagename" label-class="font-bold text-lg" help-class="text-sm text-gray"
              input-class="b-rd-md p-1.5 b-1 b-black" type="text" label="Username" help="Please enter your username."
              validation="required" validation-visibility="dirty" :validation-messages="{
                matches: 'Must have length between 5 and 15',
              }" message-class="text-primary"
            />
          </FormKit>
        </div>

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
