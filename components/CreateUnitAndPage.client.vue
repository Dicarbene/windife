<script lang="ts" setup>
const nuxtApp = useNuxtApp()
const userStore = useUserStore()
const show = ref(false)
const createCat = ref(false)
const { $toast } = useNuxtApp()
const switchCat = () => createCat.value = !createCat.value
const openModal = () => show.value = true
const closeModal = () => show.value = false

const unitData = ref('')
const pagename = ref('')
const unitList = ref(['test', 'todo'])
const unitName = ref('')
const unitOption = ref([])

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

const createPage = async () => {
  useFetch('/api/page', {
    method: 'post',
    body: {
      name: pagename,
      author: userStore.value?.name,
      unit: unitData.value,
    },
    onResponse({ response }) {
      $toast.success('Page created successfully')
      closeModal()
    },
    onRequestError({ response }) {
      $toast.error('Page creation failed')
      closeModal()
    },
  })
}
const uOption = ref({})
const createUnit = () => {
  uOption.value = {}
  for (let i = 0; i < unitOption.value.length; ++i)
    uOption[unitOption.value[i]] = true
  useFetch('/api/unit', {
    method: 'post',
    body: {
      name: unitName.value,
      user: userStore.value?.name,
      option: JSON.stringify(uOption),
    },
    onResponse({ response }) {
      $toast.success('Unit created successfully')
      closeModal()
    },
    onRequestError({ response }) {
      $toast.error('Unit creation failed')
      closeModal()
    },
  })
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
        <h3 class="font-bold text-lg text-center">
          Create Unit and Page | 创建单元与页面
        </h3>
        <div v-if="!createCat">
          <p py-4 btn-secondary text-lg text-center @click="switchCat">
            Unit|单元
          </p>
          <FormKit type="form" :submit-attrs="{ inputClass: 'mt-5 btn-primary' }" @submit="createUnit">
            <FormKit
              v-model="unitName" label-class="font-bold text-lg" help-class="text-sm text-gray"
              input-class="b-rd-md p-1.5 b-1 b-black" type="text" label="Unit name | 单元名" help="Please enter your unit name."
              validation="required" validation-visibility="dirty"
            />
            <FormKit
              v-model="unitOption"
              type="checkbox"
              inner-class="flex"
              :options="['header', 'list', 'paragraph', 'checklist', 'underline']"
              help="Customize your editor tools. | 自定义你的编辑器。"
            />
            {{ unitName }}+{{ uOption }}
          </FormKit>
        </div>

        <div v-if="createCat">
          <p py-4 btn-secondary text-lg text-center @click="switchCat">
            Page | 页面
          </p>
          <FormKit type="form" :submit-attrs="{ inputClass: 'mt-5 btn-primary' }" @submit="createPage">
            <FormKit
              v-model="unitData"
              type="select"
              label="Select your unit. 选择你的单元"
              label-class="test-sm text-gray"
              name="unit selection"
              :options="unitList"
              @click="updateUnitList"
            />
            <FormKit
              v-model="pagename" label-class="font-bold text-lg" help-class="text-sm text-gray"
              input-class="b-rd-md p-1.5 b-1 b-black" type="text" label="Page name | 页面名" help="Please enter your page name."
              validation="required" validation-visibility="dirty"
            />
          </FormKit>
          {{ userStore?.name }} + {{ pagename }} + {{ unitData }}
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
