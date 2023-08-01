<template>
  <component :is="component.is" v-on="component.on" />
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue'

import GameStore, { Step } from '@/stores/GameStore'

import GameChoice from '@/components/GameChoice.vue'
import GameIntro from '@/components/GameIntro.vue'
import GameScore from '@/components/GameScore.vue'

export default Vue.extend({
  components: {
    GameIntro,
    GameChoice,
    GameScore,
  },

  computed: {
    component(): { is: VueConstructor<Vue>; on: Record<string, () => void> } {
      return {
        [Step.INTRO]: { is: GameIntro, on: { done: this.choose } },
        [Step.CHOICE]: { is: GameChoice, on: { done: this.score } },
        [Step.SCORE]: { is: GameScore, on: { start: this.start, menu: this.menu } },
      }[GameStore.state.step]
    },
  },

  created() {
    this.start()
  },

  methods: {
    start() {
      GameStore.updateStep('INTRO')
    },

    choose() {
      GameStore.updateStep('CHOICE')
    },

    score() {
      GameStore.updateStep('SCORE')
    },

    menu() {
      GameStore.updateScene('MENU')
    },
  },
})
</script>
