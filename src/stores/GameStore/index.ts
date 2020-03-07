import Vue from 'vue'

import { Scenes } from './Game.types'

export * from './Game.types'

const state: {
  scene: keyof typeof Scenes
} = Vue.observable({
  scene: 'MENU',
})

export default {
  state,
}
