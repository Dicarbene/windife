<script lang="ts" setup>
const userStore = useUserStore()
const childHover = ref(false)
const styleParent = 'bg-gray-50'
const logout = () => {
  userStore.value = null
  const { $toast } = useNuxtApp()
  $toast.success('Logged out successfully')
  navigateTo('/')
}
</script>

<template>
  <ClientOnly>
    <Toaster position="top-center" />
  </ClientOnly>
  <header v-if="userStore != null" md:visible fixed z-auto top-0 w-38 sm:w-15vw h-100vh b-r bg-gray-50>
    <button
      relative flex justify-between gap-2 rounded btn-primary hover:bg-gray-200 bg-gray-50 text-black text-center
      h-10 w-full font-600 overflow-auto :style="{ 'background-color': childHover ? 'rgba(229, 231, 235)' : '' }"
    >
      <span rounded bg-gray-300 w-6 h-6 inline-block left-2 text-gray-500>{{ userStore?.name.slice(0, 1).toUpperCase()
      }}</span>{{ userStore?.name }}
      <div inline i-ri-expand-up-down-line w-4 h-6 bg-gray top-1 />
      <button
        flex self-end justify-center items-center btn-round w-7 h-7 hover:bg-gray-300 transition-all
        @mouseover="() => { childHover = true }" @mouseout="() => { childHover = false }"
      >
        <CreateUnitAndPage />
      </button>
    </button>
    <button btn-secondary fixed top-1 right-1 @click="logout">
      Log out
    </button>
    <div class="grid-rows-[repeat(10,1.5rem)]" mt-2 grid gap-0.5 px-2 text-gray-8>
      <Modal>
        <template #icon>
          <div i-ri-settings-2-line />
        </template>
        <template #msg>
          Settings
        </template>
        <template #header>
          Settings
        </template>
        <template #todo>
          ipsrum aalksdjaslkd
        </template>
        <template #closeMessage>
          Close
        </template>
      </Modal>
      <div btn-secondary flex gap-2 h-6 text-center font-550 style="line-height: 0.9rem;" @click="navigateTo('/search')">
        <div i-carbon-search />Search
      </div>
      <br w-5 h-5>
      <div
        btn-secondary flex gap-1.5 h-6 text-center font-550 style="line-height: 1rem;"
        @click="navigateTo('/user/test')"
      >
        <button class="btn-tertiary" i-ri-arrow-right-s-line active:i-ri-chevron-down w-5 h-4 />
        <button class="btn-tertiary" i-ri-file-text-line w-4 h-4 />
        Getting Started
      </div>
      <div btn-secondary flex gap-1.5 h-6 text-center font-550 style="line-height: 1rem;">
        <button class="btn-tertiary" i-ri-arrow-right-s-line active:i-ri-chevron-down w-5 h-4 />
        <button class="btn-tertiary" i-twemoji-pushpin w-4 h-4 />
        Quick Notes
      </div>
      <div btn-secondary flex gap-1.5 h-6 text-center font-550 style="line-height: 1rem;">
        <button class="btn-tertiary" i-ri-arrow-right-s-line active:i-ri-chevron-down w-5 h-4 />
        <button class="btn-tertiary" i-ri-install-line w-4 h-4 />
        Task Lists
      </div>
      <UnitPanel h-50 />
      <div mt-100>
        <div btn-secondary flex gap-2 h-6 text-center font-550 style="line-height: 0.9rem;">
          <div i-ri-article-line top-0.5 />Templates
        </div>
        <div
          btn-secondary flex gap-2 h-6 text-center font-550 style="line-height: 0.9rem;"
          @click="navigateTo('/import')"
        >
          <div i-ri-chat-download-line top-0.5 />Import
        </div>
        <div
          btn-secondary flex gap-2 h-6 text-center font-550 style="line-height: 0.9rem;"
          @click="navigateTo('/export')"
        >
          <div i-ri-code-box-line top-0.5 />Export
        </div>
      </div>
    </div>
  </header>
  <header v-else fixed top-0 backdrop-blur z-999>
    <div class="flex flex-row justify-between w-97vw ml-1.5vw mr-1.5vw h-20 font-sans font-544">
      <div class="h-20 w-22 inline-block text-center mr-3 font-italic cursor-pointer">
        <NuxtLink to="/">
          <span class="font-black tracking-tight" style="line-height: 5rem;font-size: 1.6rem">
            <span text-4xl text-gray-4 pr-0.25>W</span>indife
          </span>
        </NuxtLink>
      </div>

      <div class="flex flex-1 h-33px my-auto justify-between w-auto m-3">
        <div id="left" invisible md:visible class="flex my-auto">
          <button class="btn-secondary">
            <NuxtLink to="/docs">
              Docs
            </NuxtLink>
          </button>
          <button class="btn-secondary">
            <NuxtLink to="/products">
              Products
            </NuxtLink>
          </button>
          <button class="btn-secondary">
            <NuxtLink to="/prices">
              Prices
            </NuxtLink>
          </button>
          <button class="btn-secondary">
            <NuxtLink>Contact</NuxtLink>
          </button>
        </div>
        <div id="right" class="flex justify-center items-center gap-1">
          <DarkToggle />
          <button class="btn-secondary">
            <NuxtLink to="/login">
              Log in
            </NuxtLink>
          </button>
          <span mr-3 text-gray-4> | </span>
          <button class="btn-primary inline text-sm">
            <NuxtLink to="/register">
              Try Windife free
            </NuxtLink>
          </button>
        </div>
      </div>
    </div>
  </header>
  <slot />
</template>
