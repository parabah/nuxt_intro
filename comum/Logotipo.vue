<template>
  <div class="flex items-center">
    <img :src="imagem" alt="" class="w-8 border rounded-full">
    <p class="ml-2 lobster">{{texto}}</p>
  </div>
</template>

<script>
export default {
  props: {
    imagem: {
        type: String,
        default: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Tulliana_launch.png'
    },
    texto: {
        type: String,
        default: 'Launch LTDA'
    }
  },
  head: {
    link: [
      { rel:"preconnect", href:"https://fonts.googleapis.com"},
      { rel:"preconnect", href:"https://fonts.gstatic.com", crossorigin: ""},
      { rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Lobster&family=Sen&display=swap"}
    ],
  },
}
</script>

<style scoped>
 .lobster {
  font-family: 'Lobster', 'cursive';
 }
</style>