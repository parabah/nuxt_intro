<template>
  <div>
    <h1 class="text-2xl text-center">About</h1>
    <p class="lobster">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, quae mollitia esse distinctio rem reprehenderit? Earum consectetur facere commodi doloremque nulla, delectus sit at, temporibus accusantium necessitatibus laudantium consequatur quae!</p>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  head: {
    link: [
      { rel:"preconnect", href:"https://fonts.googleapis.com"},
      { rel:"preconnect", href:"https://fonts.gstatic.com", crossorigin: ""},
      { rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Lobster&family=Sen&display=swap"}
    ],
    script: [
      { type:"text/javascript", src:"hello.js" }
    ]
  }
}
</script>
<style scoped>
 .lobster {
  font-family: 'Lobster', 'cursive';
 }
</style>