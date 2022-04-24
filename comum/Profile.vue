<template>
  <div class="flex items-center">
    <div 
        v-if="user.avatar" class="w-8 h-8 border rounded-full" 
        :style="`background-image: url('${user.avatar}'); background-size: cover;`"
        @click="showDetails = !showDetails"
    >
    <ProfileDetails v-show="showDetails"/>
    </div>
    <nuxt-link v-else to="/login">Login</nuxt-link>
  </div>
</template>

<script>
import ProfileDetails from './ProfileDetails.vue'
export default {
 components: { ProfileDetails },
 data () {
      return {
        showDetails:  false
      }
   },
 computed: {
       user() {
           return this.$store.state.user;
       }
   }
}
</script>

<style>

</style>