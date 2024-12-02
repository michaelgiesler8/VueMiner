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


