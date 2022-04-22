<template>
  <div>
    <div class="flex max-w-2xl rounded-lg shadow-md m-2">
        <div class="bg-blue-400 w-1/5 rounded-tl-lg rounded-bl-lg">
            <img :src="aboutData.avatar" alt="" class="p-1">            
        </div>
        <div class="w-4/5">
            <h1 class="py-2 bg-blue-900 text-white text-center font-bold text-2xl rounded-tr-lg">{{aboutData.name}}</h1>
            <a 
             :href="`mailto:${aboutData.email}`"
             class="text-sm font-thin pl-2"
            >{{aboutData.email}}</a>
            <p class="text-xs font-mono p-2">{{aboutData.bio}}</p>
            <div class="flex justify-end text-lg mr-2">
              <a :href="aboutData.facebook" target="_blank" class="px-1 fa fa-facebook"></a>
              <a :href="aboutData.twitter" target="_blank" class="px-1 fa fa-twitter"></a>
              <a :href="aboutData.instagram" target="_blank" class="px-1 fa fa-instagram"></a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  props: {
    aboutData : {
      type: Object,
      default() {
        return {
          name : 'Meu nome vai aqui',
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mug_icon.png/640px-Mug_icon.png',
          bio: 'Esta é minha biografia',
          email: 'endereco@mail.com',
          facebook: 'https://www.facebook.com/meu_usuario',
          instagram: 'https://www.instagram.com/meu_usuario/',
          twitter: 'https://twitter.com/meu_usuario'
        }
      }
    }
  },
  head() {
    return {
      link: [ 
        { rel:"stylesheet",  href :"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" }
      ]
    }
  }
}
</script>
<style>

</style>