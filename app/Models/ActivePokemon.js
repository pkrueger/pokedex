export class ActivePokemon {
  /**
   *
   * @param {{height:number, weight:number, types:array, name:string, sprites:object}} data
   */
  constructor(data) {
    this.height = data.height;
    this.weight = data.weight;
    this.types = data.types;
    this.name = data.name;
    this.img = data.sprites.other["official-artwork"].front_default;
  }

  //prettier-ignore
  get ActivePokemonTemplate() {
    return /*html*/ `
      <div class="pokemon-viewer text-center">
        <div class="outer">
          <div class="inner fs-2 text-capitalize">${this.name}</div>
        </div>
        <img
          src="${this.img}"
          alt="image of ${this.name}"
          class="img-fluid"
        />
        <div class="outer">
          <div class="inner">
            <div class="row py-4 fs-4">
              <div class="col-md-6 my-3">Height: ${(this.height / 3.048).toFixed(1)} ft</div>
              <div class="col-md-6 my-3">Weight: ${(this.weight / 4.536).toFixed(1)} lbs</div>
              <div class="col-md-6 my-3 text-capitalize">
                Types: ${this.types.length == 1 ? this.types[0].type.name : this.types[0].type.name + ' ' + this.types[1].type.name}
              </div>
              <div class="col-md-6 mt-4">
                <button class="catch-button">
                  <i class="mdi mdi-pokeball fs-1 me-2"></i
                  ><span>Catch</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
