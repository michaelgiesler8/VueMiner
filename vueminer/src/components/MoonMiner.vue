<script setup>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState.js'
import { gameService } from '../service/GameService.js'

const cheese = computed(() => AppState.cheese)
const clickUpgrades = computed(() => AppState.clickUpgrades)
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
})
</script>
<template>
  <div class="container text-center">
    <h1 class="my-4">Mine for Galactic Resources</h1>

    <div class="mining-area mb-4">
      <img
        src="https://images.unsplash.com/photo-1680614429740-c266e6983cbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0aXRjaHxlbnwwfHwwfHx8MA%3D%3D"
        alt="Mine with Stitch" @click="mine" class="mine-image img-fluid rounded-circle shadow">
      <h2 class="mt-3">{{ cheese }} Cheese</h2>
    </div>

    <div class="row">
      <div class="col-md-6">
        <h4>Click Upgrades</h4>
        <div v-for="upgrade in clickUpgrades" :key="upgrade.id" class="mb-2">
          <button class="btn btn-primary w-100" @click="buyUpgrade(upgrade)" :disabled="cheese < upgrade.price">
            <img :src="upgrade.image" :alt="upgrade.name" class="upgrade-icon">
            {{ upgrade.name }} (+{{ upgrade.multiplier }}/3s) - {{ upgrade.price }} Cheese
          </button>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-md-6">
        <h5>Click Stats</h5>
        <p>Click Power: {{ clickPower }}</p>
      </div>
      <div class="col-md-6">
        <h5>Automatic Stats</h5>
        <p>Auto Collection Rate: {{ autoRate }}/3s</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mine-image {
  width: 160px;
  height: 160px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.mine-image:hover {
  transform: scale(1.1);
}

.upgrade-icon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 5px
}
</style>