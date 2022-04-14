<template>
  <div>
    <h1 class="text-2xl text-center">Página Principal</h1>
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
  }
}
</script>
