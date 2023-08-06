import Vue from 'vue'

import { Choice, Player, Scene, Step } from './types'

export * from './types'

const state: {
  scene: keyof typeof Scene
  players: Player[]
  step: keyof typeof Step
  choices: (keyof typeof Choice | null)[]
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
  choices: [null, null],
})

export default {
  state,

  updateScene(scene: keyof typeof Scene) {
    state.scene = scene
  },

  updatePlayer(player: Player, index: number) {
    Vue.set(state.players, index, player)
  },

  updateStep(step: keyof typeof Step) {
    state.step = step
  },

  updateChoice(choice: keyof typeof Choice, index: number) {
    Vue.set(state.choices, index, choice)
  },

  resetChoices() {
    state.choices.fill(null)
  },
}
