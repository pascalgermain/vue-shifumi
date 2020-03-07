<template>
  <game-intro v-if="step === 'INTRO'" @done="choice" />
  <div v-else-if="step === 'CHOICE'">
    <button type="button" class="btn btn-primary my" @click="choose">Choose</button>
  </div>
  <div v-else-if="step === 'SCORE'">
    <button type="button" class="btn btn-primary mx my" @click="start">Replay</button>
    <button type="button" class="btn btn-primary mx my" @click="exit">Exit</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import GameStore from '@/stores/GameStore'

import GameIntro from '@/components/GameIntro.vue'

export default Vue.extend({
  components: {
    GameIntro,
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

    choice() {
      GameStore.updateStep('CHOICE')
    },

    choose() {
      GameStore.updateStep('SCORE')
    },

    exit() {
      GameStore.updateScene('MENU')
    },
  },
})
</script>
