import Vue from 'vue'

import { Scenes, Player } from './Game.types'

export * from './Game.types'

const state: {
  scene: keyof typeof Scenes
  players: [Player, Player]
} = Vue.observable({
  scene: 'MENU',
  players: [
    {
      number: 1,
      type: 'HUMAN',
    },
    {
      number: 2,
      type: 'COMPUTER',
    },
  ],
})

export default {
  state,

  updatePlayer(player: Player, index: number) {
    Vue.set(state.players, index, player)
  },
}
