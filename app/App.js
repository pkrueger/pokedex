import { ActivePokemonController } from "./Controllers/ActivePokemonController.js";
import { PokemonController } from "./Controllers/PokemonController.js";

class App {
  pokemonController = new PokemonController();
  activePokemonController = new ActivePokemonController();
}

window["app"] = new App();
