<template>
  <div>
      <p>Página de produtos</p>
      <ul>
        <li 
          v-for="(produto, key) in produtos" 
          :key="key">
          <nuxt-link :to="`/produtos/${produto.codigo}`">
           {{produto.titulo}}
          </nuxt-link>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.$axios.get('http://localhost:5000/produtos')
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