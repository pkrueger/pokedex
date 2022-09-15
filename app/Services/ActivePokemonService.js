import { appState } from "../AppState.js";
import { ActivePokemon } from "../Models/ActivePokemon.js";
import { PokemonServer } from "./AxiosService.js";

class ActivePokemonService {
  async getActive(url) {
    const res = await PokemonServer.get(url);

    // @ts-ignore
    appState.activePokemon = new ActivePokemon(res.data);
  }
}

export const activePokemonService = new ActivePokemonService();
