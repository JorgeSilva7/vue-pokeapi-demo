<template>
  <div class="container mt-5">
    <h1>Tipos</h1>
    <span class="list" v-for="type in types" :key="type.name">
      {{ type.name.toUpperCase() }} &nbsp;
    </span>
    <h1>Pokemons</h1>
    <input v-model="limit" type="number" min="0" />
    <button class="btn btn-primary" @click="getData()">Obtener Datos</button>
    <ul class="list-group" v-for="pokemon in pokemons" :key="pokemon.name">
      <li
        @click="showPokemonData(pokemon.url)"
        class="list-group-item mb-2 hover"
      >
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<style>
.hover {
  cursor: pointer;
}
</style>

<script>
// @ is an alias to /src
import { listPokemon } from "../services/pokemon.service";
import typeService from "../services/type.service";

export default {
  name: "HomeView",
  data() {
    return {
      pokemons: [],
      types: [],
      limit: 10,
    };
  },
  mounted() {
    //Al cargar la página se utiliza el metodo getTypes que carga los tipos en this.types desde HTTP
    this.getTypes();
  },
  methods: {
    showPokemonData(url) {
      this.$router.push({ name: "pokemon", params: { url } });
    },
    /*
     * Acá se utiliza async + 'nombre función' ya que se utilizará await dentro,
     * si no da error y debe esperar la respuesta antes.
     */
    async getData() {
      const response = await listPokemon(100); //Acá espera que le llegue la respuesta antes de seguir con la linea de abajo
      this.pokemons = response.data.results;
    },
    async getTypes() {
      const response = await typeService.list();
      this.types = response.data.results;
    },
  },
};
</script>
