<template>
  <div>
    <h1 class="text-2xl text-center">Login</h1>
    <nuxt-link to="/">Início</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'no-nav',
  async fetch(){
    return await this.$axios.get('http://localhost:5000/users')
      .then(response => {
        this.$store.dispatch('setUser',response.data[0]);
    })
  },
  head() {
    return {
      title: 'Login page',
      meta: [
        { 
	        hid: 'description',
          name: 'description', 
          content: `Esta página foi exibida no dia ${this.dia} as ${this.hora}`
        }
      ]
    }
  },
  computed: {
    hora(){
      const agora = new Date();
      const horas = agora.getHours();
      const minutos =  agora.getMinutes();
      return (horas < 9 ? '0'+ horas : horas) + ':' + (minutos < 9 ? '0'+ minutos : minutos);
    },
    dia(){
      const hoje = new Date();
      const dia = hoje.getDate();
      const mes = hoje.getMonth() + 1;
      return (dia < 9 ? '0'+ dia : dia) + '/' + (mes < 9 ? '0'+ mes : mes) + '/' + hoje.getFullYear();
    }
  }
}
</script>