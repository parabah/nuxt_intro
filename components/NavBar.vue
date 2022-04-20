<template>
  <div class="border rounded-md bg-blue-300 flex justify-around p-4 font-bold">
      <Logotipo />
      <AppMenu :opcoes="opcoes"/>
      <p class="ml-auto">
          <nuxt-link to="/login">Login</nuxt-link>
      </p>
  </div>
</template>

<script>
import Logotipo from '../comum/Logotipo.vue'
import AppMenu from '../comum/AppMenu.vue'
export default {
    components: {
        Logotipo,
        AppMenu
    },
    data(){
        return { 
            opcoes: [
              { texto: "Home", url: "/"},
              { texto: "Produtos", url:"/produtos"},
              { texto: "About", url:"/about"},
            ]
        }
    },
}
</script>

<style>

</style>