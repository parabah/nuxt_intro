<template>
  <div v-if="!$fetchState.error" class="flex">
    <img 
      :src="produto.foto" alt=""
      class="w-2/5 mr-1 rounded-md"
    >
    <div class="w-3/5">
      <div>
        <p class="text-2xl font-bold mb-1">{{produto.titulo}}</p>
        <p class="text-xs mb-2">Codigo: {{produto.codigo}}</p>
        <p class="mb-4">{{produto.descricao}}</p>
        <p class="text-xl font-bold font-mono mb-4">{{val_preco}}</p>
        <nuxt-link 
          to="/produtos"
          class="bg-blue-200 text-xs rounded-full p-4"
        >Voltar</nuxt-link>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Não foi possível carregar os dados do Produto. Por favor tente mais tarde !</p>
    <p>Error: {{$fetchState.error.message}}</p>
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
    return this.$axios.get(`https://my-json-server.typicode.com/parabah/nuxt_intro/produtos?codigo=${this.codg_prod}`)
      .then(response => {
        this.produto = response.data[0];
        return true;
      })
  },
  computed: {
    codg_prod() {
      return this.$route.params.codigo;
    },
    val_preco(){
      return this.produto.preco ?
        Intl.NumberFormat('pt-BR', { style: "currency",  currency: 'BRL'}).format(this.produto.preco) 
        : 'Preço não definido';
    }
  },
}
</script>

<style>

</style>