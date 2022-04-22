<template>
  <div class="flex flex-col  items-center my-4 mx-auto w-4/5 border border-red-200 rounded-md">
      <h1 class="text-2xl my-4 font-bold">Ocorreu um erro</h1>
      <svg class="h-16 w-16 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h2 v-if="error.statusCode === 404">Página não encontrada</h2>
      <h2 v-else>{{ error.message }}</h2>
    <nuxt-link to="/" class="my-4 bg-gray-900 text-white p-2 rounded-md">Voltar ao início</nuxt-link>
  </div>
</template>

<script>
export default {
    layout: 'no-nav',
    props:{
        error: {
            type: Object,
            default: null
        }
    }
}
</script>

<style>

</style>