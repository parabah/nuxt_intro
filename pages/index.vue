<template>
  <div class="text-center">
      <h1 class="text-2xl font-semibold mb-4">Boas vindas ao aplicativo!</h1>
      <div v-if="!loggedIn">
        Para acessar todos os recursos você precisa fazer
        <nuxt-link to="/login">Login</nuxt-link>
      </div>
      <div v-else>
        {{ userName }}
      </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: ' Principal',
    meta: [
      { 
        hid: 'description',
	      name: 'description', 
        content: 'Página principal do aplicativo' 
      },
    ]
  },
  computed:{
    loggedIn() {
      return this.$store.getters.isLogged;
    },
    userName(){
      return this.$store.state.user.name;
    }
  }
}
</script>
