<script lang="ts" setup>
const show = ref(false)
const openModal = () => {
  show.value = true
}
const closeModal = () => {
  show.value = false
}
</script>

<template>
  <div btn-secondary flex gap-2 h-6 text-center font-550 style="line-height: 0.9rem;" @click="show = true">
    <slot name="icon" />
    <slot name="msg" />
  </div>
  <Teleport v-if="show" to="body">
    <div
      class="fixed w-full h-full inset-0 flex justify-center items-center pointer-events-auto visible backdrop-blur z-99 transition"
    >
      <div class="bg-gray-200 bg-opacity-80 b-rounded form z-100 fixed " style="padding:1em">
        <h3 class="font-bold text-lg">
          <slot name="header" />
        </h3>
        <p class="py-4">
          <slot name="todo" />
        </p>
        <div class="flex">
          <button class="btn-secondary" @click="closeModal">
            <slot name="closeMessage" />
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
