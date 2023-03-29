<script lang="ts" setup>
const userStore = useUserStore()
</script>

<template>
  <header v-if="userStore != null" fixed left-2 top-1 grid grid-cols-1 grid-rows-10 w-50 h-100vh b-r b-gray>
    <div rounded btn-primary hover:bg-gray-200 bg-white text-black text-center h-10 p-2 text-lg>
      <span rounded bg-gray-200 w-6 h-6 inline-block left-0 absolute>{{ userStore?.name.slice(0, 1).toUpperCase() }}</span>{{ userStore?.name }}
    </div>
    <div btn-secondary>
      <div i-carbon-search />Search
    </div>
    <div btn-secondary>
      recipes
    </div>
    <div btn-secondary>
      recipes
    </div>
    <div btn-secondary>
      recipes
    </div>
  </header>
  <header v-else fixed top-0>
    <div class="flex flex-row justify-between w-97vw ml-1.5vw mr-1.5vw h-20 font-sans font-544">
      <div class="h-20 w-22 inline-block text-center mr-3 font-italic cursor-pointer">
        <NuxtLink to="/">
          <span class="font-black tracking-tight" style="line-height: 5rem;font-size: 1.6rem">
            <span text-4xl text-gray-4 pr-0.25>W</span>indife
          </span>
        </NuxtLink>
      </div>

      <div class="flex flex-1 h-33px my-auto justify-between w-auto m-3">
        <div id="left" class="flex my-auto">
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
