import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { PokemonServer } from "./AxiosService.js";

class PokemonService {
  async getPokemon() {
    const res = await PokemonServer.get("/api/v2/pokemon", {
      params: {
        limit: 151,
        offset: 0,
      },
    });
    appState.pokemon = res.data.results.map((p) => new Pokemon(p));
  }
}

export const pokemonService = new PokemonService();
