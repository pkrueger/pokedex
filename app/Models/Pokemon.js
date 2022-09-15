export class Pokemon {
  /**
   *
   * @param {{name:string, url:string}} data
   */
  constructor(data) {
    this.name = data.name;
    this.url = data.url;
  }

  // prettier-ignore
  get PokemonListTemplate() {
    return /*html*/ `
    <li class="d-flex justify-content-between align-items-center" onclick="app.activePokemonController.getActive('${this.url.split('.co')[1]}')">
      <div>
        <i class="mdi mdi-pokeball fs-1 me-4"></i
        ><span class="text-capitalize">${this.name}</span>
      </div>
      <div>
        <i class="mdi mdi-pokeball fs-1 using-this-to-align"></i
        ><span class="pokemon-list-number">${
          this.url.split("/")[this.url.split("/").length - 2]
        }</span>
      </div>
    </li>
    `;
  }
}
