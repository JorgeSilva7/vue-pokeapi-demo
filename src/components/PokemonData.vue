<template>
  <div class="container">
    <div class="card" style="width: 18rem" v-if="pokemon">
      <img
        :src="pokemon.sprites.other['official-artwork'].front_default"
        class="card-img-top"
        alt=""
      />
      <div class="card-body">
        <h5 class="card-title">{{ pokemon.name }}</h5>
        <p class="card-text">weight: {{ pokemon.weight }}</p>
        <p class="card-text">
          Types:
          <span v-for="type in pokemon.types" :key="type.slot"
            >{{ type.type.name }}&nbsp;</span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonData",
  props: {
    pokemon: Object,
  },
};
</script>

