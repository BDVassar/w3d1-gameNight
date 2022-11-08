import { appState } from "../AppState.js";
import { Player } from "../Models/player.js";


class PlayerServices {

  addPlayer(playerData) {
    let newPlayer = new Player(playerData.name)
    appState.players.push(newPlayer)
  }

  scoreIncrease(name) {
    let player = appState.players.find(p => p.name == name)
    player.score++
  }

  scoreDecrease(name) {
    let player = appState.players.find(p => p.name == name)
    player.score--
  }

}

export const playerServices = new PlayerServices()