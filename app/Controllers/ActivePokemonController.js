import { appState } from "../AppState.js";
import { activePokemonService } from "../Services/ActivePokemonService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawActivePokemon() {
  // @ts-ignore
  setHTML("activePokemon", appState.activePokemon.ActivePokemonTemplate);
}

export class ActivePokemonController {
  constructor() {
    appState.on("activePokemon", _drawActivePokemon);
  }

  async getActive(url) {
    try {
      await activePokemonService.getActive(url);
    } catch (error) {
      console.error(["[GetActive]", error]);
      Pop.error(error);
    }
  }
}
