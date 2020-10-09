import axios from "axios";

export default {
  getPokemons() {
    return axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
  },

  getPokemonByUrl(url) {
    return axios.get(url);
  },
};
