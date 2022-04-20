<template>
  <div class="ml-auto flex items-center">
    <nuxt-link v-for="(opcao, okey) in opcoes" :key="okey" :to="opcao.url" class="mr-2 hover:bg-white p-1 rounded-md">{{opcao.texto}}</nuxt-link>
  </div>
</template>

<script>
export default {
    props:{
        opcoes: {
            type: Array,
            default: () => [
                { texto: 'item1', url:'#'},
                { texto: 'item2', url:'#'},
                { texto: 'item2', url:'#'},
            ]
        }
    }
}
</script>

<style scoped>
    .nuxt-link-exact-active {
    color: blue;
    }
</style>