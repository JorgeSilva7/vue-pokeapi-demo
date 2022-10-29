<template>
  <div class="about">
    <h1>Pokemon View</h1>
    <pokemon-data :pokemon="pokemon"> </pokemon-data>
  </div>
</template>

<script>
import PokemonData from '../components/PokemonData.vue';
import axios from 'axios';

export default {
  name: 'PokemonView',
  components: {
    PokemonData
  },
  data(){
    return {
      pokemon: null
    }
  },
  props: {
    url: String
  },
  mounted(){
    //Acá se utiliza directamente la librería (sin pasar por el archivo). Si se hace apurado se 
    //puede hacer así
    axios
      .get(this.url)
      .then(response => {
        this.pokemon = response.data;
      })
  }
}
</script>
