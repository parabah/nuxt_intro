<template>
  <div class="border rounded-md bg-blue-300 flex justify-around p-4 font-bold">
      <Logotipo />
      <AppMenu :opcoes="opcoes"/>
      <Profile />
  </div>
</template>

<script>
import Logotipo from '../comum/Logotipo.vue'
import AppMenu from '../comum/AppMenu.vue'
import Profile from '../comum/Profile.vue'

export default {
    components: {
        Logotipo,
        AppMenu,
        Profile
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