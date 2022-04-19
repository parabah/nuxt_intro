<template>
    <div>
      <div v-if="!$fetchState.error">
      <p>Detalhes de : <span class="uppercase">{{pokemon.name}}</span></p>
      <ul>
        <strong>Habilidades</strong>
        <li v-for="(ability, akey) in pokemon.abilities" :key="akey">
          {{ability.ability.name}}
        </li>
      </ul>
      <p><strong>Altura (m):</strong> {{pokemon.height}}</p>
      <p><strong>Peso (lb):</strong> {{pokemon.weight}}</p>
      <strong>Sprites</strong>
      <img :src="pokemon.sprites.front_default" alt="">
      <img :src="pokemon.sprites.back_default" alt="">
      <img :src="pokemon.sprites.other['official-artwork'].front_default" alt="">
    </div>
    <div v-else>
      <p>Não foi possível carregar os dados do Pokemon {{nome}}. Por favor tente mais tarde !</p>
      <p>Error: {{$fetchState.error.message}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      pokemon: {}
    }
  },
  async fetch(){
    const result = await this.$axios.get(`https://pokeapi.co/api/v2/pokemon/${this.nome}`);
    // console.log(result.data);
    const { name, abilities, sprites, height, weight, moves } = result.data;
    this.pokemon = {
      name, abilities, sprites, height, weight, moves
    };
  },  
  head() {
    return {
    title: `Detalhes de ${this.nome}`,
    meta: [
      { 
        hid: 'description',
        name: 'description',
        content: `Pokemon ${this.pokemon.name}, Peso: ${this.pokemon.weight}, Altura: ${this.pokemon.height}` 
      }
      ]
    }
  },
  computed: {
    nome(){
      return this.$route.params.nome;
    }
  },

}
</script>

<style>

</style>