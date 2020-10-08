<template>
  <div id="app">
    <TheHeader></TheHeader>
    <div class="pokedex-grid">
      <PokemonCard
        v-for="pokemon in pokemons"
        v-bind:key="pokemon.id"
        v-bind:pokemon="pokemon"
      ></PokemonCard>
    </div>
  </div>
</template>

<script>
import PokemonService from "./services/PokemonService";

import TheHeader from "./components/TheHeader";
import PokemonCard from "./components/PokemonCard";

export default {
  name: "App",
  components: {
    TheHeader,
    PokemonCard,
  },
  data: () => {
    return {
      pokemons: [],
    };
  },
  mounted() {
    PokemonService.getPokemons()
      .then((response) => {
        this.pokemons = response.map((pokemon) => pokemon.data);
        console.log(this.pokemons);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.pokedex-grid {
  padding: 1em 100px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 1em;
  row-gap: 1em;
}
</style>
