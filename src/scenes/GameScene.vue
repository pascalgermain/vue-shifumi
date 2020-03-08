<template>
  <game-intro v-if="step === 'INTRO'" @done="choose" />
  <game-choice v-else-if="step === 'CHOICE'" @done="score" />
  <div v-else-if="step === 'SCORE'">
    <button type="button" class="btn btn-primary mx my" @click="start">Replay</button>
    <button type="button" class="btn btn-primary mx my" @click="menu">Menu</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import GameStore from '@/stores/GameStore'

import GameIntro from '@/components/GameIntro.vue'
import GameChoice from '@/components/GameChoice.vue'

export default Vue.extend({
  components: {
    GameIntro,
    GameChoice,
  },

  computed: {
    step() {
      return GameStore.state.step
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
