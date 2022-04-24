<template>
  <div class="flex flex-col items-center">
      <p class="text-2xl font-semibold mb-4">Relação de produtos</p>
      <nuxt-link 
        v-for="(produto, key) in produtos" :key="key" :to="`/produtos/${produto.codigo}`"
        class="hover:bg-blue-800 hover:text-white border w-64 rounded-md p-1"
      >
        {{produto.titulo}}
      </nuxt-link>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.$axios.get('https://my-json-server.typicode.com/parabah/nuxt_intro/produtos')
      .then(response => {
        return {
          produtos: response.data
        }
      })
      .catch(e => {
        context.error({ statusCode: 503, message: 'Não foi possível obter os dados, por favor tente novamente mais tarde' })
      })
  }
}
</script>

<style>

</style>