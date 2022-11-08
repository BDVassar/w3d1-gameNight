
export class Player {
  constructor(name) {
    this.name = name,
      this.score = 0
  }


  get PlayerTemplate() {
    return `<div class=" card col-12 col-md-5 shadow p-3">
      <h1>${this.name}</h1>
      <h4>${this.score}</h4>
      <button class="btn btn-success" onclick="app.playersController.scoreIncrease('${this.name}')">Increase</button>
      <button class="btn btn-danger" onclick="app.playersController.scoreDecrease('${this.name}')">Decrease</button>
  </div>`
  }
}