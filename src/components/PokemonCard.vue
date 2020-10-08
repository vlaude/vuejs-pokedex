<template>
  <div class="pokemon-card">
    <span class="pokemon-name">{{ pokemon.name }}</span>
    <img v-bind:src="pokemon.sprites.front_default" alt="" />
    <div class="types-container">
      <span
        class="type-name"
        v-for="type of pokemon.types"
        v-bind:key="type.slot"
        >{{ type.type.name }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonCard",
  props: {
    pokemon: Object,
  },
};
</script>

<style scoped>
.pokemon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1em;
  border: 1px solid #2c3e50;
  border-radius: 3px;
}
.pokemon-name {
  font-weight: bold;
  text-transform: capitalize;
}
img {
  width: 150px;
  height: auto;
}
.types-container {
  display: flex;
}
.type-name {
  padding: 0 0.5em;
  background-color: #2c3e50;
  border: 1px solid #fafafa;
  border-radius: 15px;
  color: #fafafa;
  font-size: 14px;
}
</style>
