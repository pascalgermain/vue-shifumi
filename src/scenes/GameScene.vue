<template>
  <Component :is="component.is" v-on="component.on" />
</template>

<script lang="ts">
import { Component, defineComponent } from 'vue'

import game, { Step } from '@/stores/game'
import { Dictionary } from '@/utils/types'

import GameChoice from '@/components/GameChoice.vue'
import GameIntro from '@/components/GameIntro.vue'
import GameScore from '@/components/GameScore.vue'

export default defineComponent({
  components: { GameIntro, GameChoice, GameScore },

  computed: {
    component(): { is: Component; on: Dictionary<() => void> } {
      return {
        [Step.INTRO]: { is: GameIntro, on: { done: this.choose } },
        [Step.CHOICE]: { is: GameChoice, on: { done: this.score } },
        [Step.SCORE]: { is: GameScore, on: { start: this.start, menu: this.menu } },
      }[game.state.step]
    },
  },

  created() {
    this.start()
  },

  methods: {
    start() {
      game.updateStep('INTRO')
    },

    choose() {
      game.updateStep('CHOICE')
    },

    score() {
      game.updateStep('SCORE')
    },

    menu() {
      game.updateScene('MENU')
    },
  },
})
</script>
