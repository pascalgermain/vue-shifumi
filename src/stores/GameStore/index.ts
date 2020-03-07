import Vue from 'vue'

import { Scenes, Player, Step } from './Game.types'

export * from './Game.types'

const state: {
  scene: keyof typeof Scenes
  players: [Player, Player]
  step: keyof typeof Step
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
  step: 'INTRO',
})

export default {
  state,

  updateScene(scene: keyof typeof Scenes) {
    state.scene = scene
  },

  updatePlayer(player: Player, index: number) {
    Vue.set(state.players, index, player)
  },

  updateStep(step: keyof typeof Step) {
    state.step = step
  },
}
