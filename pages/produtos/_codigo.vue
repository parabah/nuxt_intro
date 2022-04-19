<template>
  <div>
      <p>Detalhes do Produto</p>
      <div v-if="!$fetchState.error">
        <p>Codigo: {{produto.codigo}}</p>
        <p>Titulo: {{produto.titulo}}</p>
        <p>Descrição: {{produto.descricao}}</p>
        <p>Preço: {{produto.preco}}</p>
        <img :src="produto.foto" alt="">
      </div>
      <div v-else>
        <p>Não foi possível carregar os ados do Produto. Por favor tente mais tarde !</p>
        <p>Error: {{$fetchState.error.message}}</p>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      produto : {}
    }
  },
  fetch(){
    return this.$axios.get(`http://localhost:5000/produtos?codigo=${this.codg_prod}`)
      .then(response => {
        this.produto = response.data[0];
        return true;
      })
  },
  computed: {
    codg_prod() {
      return this.$route.params.codigo;
    }
  },
}
</script>

<style>

</style>