<script setup>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState.js'
import { gameService } from '../service/GameService.js'

const cheese = computed(() => AppState.cheese)
const clickUpgrades = computed(() = AppState.clickUpgrades)
const autoUpgrades = computed(() => AppState.autoUpgrades)

const clickPower = computed(() => {
  let power = 1
  AppState.clickUpgrades.forEach(upgrade => {
    power += (upgrade.multiplier * upgrade.quantity)
  })
  return power
})

const autoRate = computed(() => {
  let rate = 0
  AppState.autoUpgrades.forEach(upgrade => {
    rate += (upgrade.multiplier * upgrade.quantity)
  })
  return rate
})

function mine() {
  gameService.mine()
}

function buyUpgrade(upgrade) {
  gameService.buyUpgrade(upgrade)
}

onMounted(() => {
  gameService.collectAutoUpgrades()
})s
</script>