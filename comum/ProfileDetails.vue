<template>
  <div class="profile border rounded-md bg-white p-1 text-sm">
      <p class="hover:bg-blue-500 hover:text-white">{{user.username}}</p>
      <p class="hover:bg-blue-500 hover:text-white">{{user.name}}</p>
      <p class="hover:bg-blue-500 hover:text-white">{{user.email}}</p>
      <p class="hover:bg-blue-500 hover:text-white" @click="logoff">Logoff</p>
  </div>
</template>

<script>
export default {
  computed: {
        user() {
            return this.$store.state.user;
        }
    },
  methods: {
     logoff(){
       this.$store.dispatch('setUser',{});
     }
   }
}
</script>

<style scoped>
.profile {
    /* right: 20px; */
    top: 3rem;
    right: 1rem;
    position: absolute;
}
</style>