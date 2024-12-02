import { AppState } from '../AppState.js'

class GameService {
  constructor() {
    setInterval(this.collectAutoUpgrades, 3000)
  }

  mine() {
    let multiplier = 1
    AppState.clickUpgrades.forEach(upgrade => {
      multiplier += (upgrade.multiplier * upgrade.quantity)
    })
    AppState.cheese += multiplier
    AppState.totalCollected += multiplier
  }

  collectAutoUpgrades() {
    let autoAmount = 0
    AppState.autoUpgrades.forEach(upgrade => {
      autoAmount += (upgrade.multiplier * upgrade.quantity)
    })
    AppState.cheese += autoAmount
    AppState.totalCollected += autoAmount
  }

  buyUpgrade(upgrade) {
    if (AppState.cheese >= upgrade.price) {
      AppState.cheese -= upgrade.price
      upgrade.quantity++
      upgrade.price = Math.floor(upgrade.price * 1.2)
    }
  }
}

export const gameService = new GameService()