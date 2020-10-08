import axios from "axios";

export default {
  getPokemons() {
    return axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => {
        let pokemons = response.data.results;
        let pokemonPromises = pokemons.map((pokemon) => axios.get(pokemon.url));
        return Promise.all(pokemonPromises);
      });
  },
};
