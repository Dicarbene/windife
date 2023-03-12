<script lang="ts" setup>
const { push } = useRouter()
</script>

<template>
  <header>
    <div class="flex flex-row justify-between w-97vw m-auto h-20 font-sans font-544">
      <div class="h-20 w-22 inline-block text-center pointer" @click="() => push('/')">
        <span class="font-black tracking-tight" style="line-height: 5rem;font-size: 1.6rem">
          <b>W</b>indife
        </span>
      </div>
      <div class="flex flex-1 h-33px my-auto justify-between w-auto m-3">
        <div id="left" class="flex my-auto">
          <button class="btn-secondary" @click="() => push('/docs')">
            Docs
          </button>
          <button class="btn-secondary" @click="() => push('/products')">
            Products
          </button>
          <button class="btn-secondary" @click="() => push('/prices')">
            Prices
          </button>
          <button class="btn-secondary" @click="() => push('/contact')">
            Contact
          </button>
        </div>
        <div id="right" class="flex justify-center items-center gap-1">
          <button class="btn-secondary">
            Log in
          </button>
          <br class="b-3 b-black">
          <button class="btn-primary inline text-sm">
            Try Windife free
          </button>
        </div>
      </div>
    </div>
  </header>
  <main class="w-87vw m-auto">
    <div class="header text-center text-7xl font-bold">
      <p>
        Your
        <MiscWikiIcon /> wiki ,
        <MiscDocsIcon /> docs,
      </p>
      <p>
        &
        <MiscProjectsIcon />projects. Together.
      </p>
    </div>
    <section class="h-100vh my-30 grid grid-cols-2 grid-gap-10" />
  </main>
</template>
