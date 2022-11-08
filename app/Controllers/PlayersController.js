import { appState } from "../AppState.js"
import { playerServices } from "../Services/PlayersServices.js"


export class PlayersController {

  constructor() {
    console.log(appState.players)
    this.drawPlayers()
  }

  drawPlayers() {
    let template = ''
    appState.players.forEach(p => template += p.PlayerTemplate)
    document.getElementById('app').innerHTML = template

  }

  scoreIncrease(name) {
    playerServices.scoreIncrease(name)
    this.drawPlayers()
  }

  scoreDecrease(name) {
    playerServices.scoreDecrease(name)
    this.drawPlayers()
  }

  addPlayer() {
    window.event.preventDefault()
    const form = window.event.target
    let playerData = {
      name: form.name.value
    }
    playerServices.addPlayer(playerData)
    form.reset()
    this.drawPlayers()

  }

}