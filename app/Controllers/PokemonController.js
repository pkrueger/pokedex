import { appState } from "../AppState.js";
import { pokemonService } from "../Services/PokemonService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawPokemonList() {
  let template = "";

  for (let p of appState.pokemon) {
    template += p.PokemonListTemplate;
  }

  setHTML("pokemonList", template);
}

export class PokemonController {
  constructor() {
    appState.on("pokemon", _drawPokemonList);
    this.getPokemon();
  }
  async getPokemon() {
    try {
      await pokemonService.getPokemon();
    } catch (error) {
      console.error("[GetPokemon]", error);
      Pop.error(error);
    }
  }
}
