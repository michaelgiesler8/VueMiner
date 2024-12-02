import { reactive } from 'vue'


export const AppState = reactive({
  cheese: 0,
  totalCollected: 0,

  clickUpgrades: [
    { id: 1, name: 'Pickaxe', price: 50, quantity: 0, multiplier: 1, image: 'https://images.unsplash.com/photo-1585483266684-b2f19ff1ba1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGlja2F4ZXxlbnwwfHwwfHx8MA%3D%3D', type: 'click' },
    { id: 2, name: 'Cart', price: 250, quantity: 0, multiplier: 4, image: 'https://plus.unsplash.com/premium_photo-1661332019368-5feafaba06aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWluZSUyMGNhcnR8ZW58MHx8MHx8fDA%3D', type: 'click' }
  ],
  autoUpgrades: [
    { id: 3, name: 'Miner', price: 1000, quantity: 0, multiplier: 10, image: 'https://images.unsplash.com/photo-1692248071692-9a75dabf6690?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWluZXJ8ZW58MHx8MHx8fDA%3D', type: 'click' },
    { id: 4, name: 'Rover', price: 50000, quantity: 0, multiplier: 100, image: 'https://plus.unsplash.com/premium_photo-1688778318945-6a3277fd0f05?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm92ZXJ8ZW58MHx8MHx8fDA%3D', type: 'auto' }
  ]
})
