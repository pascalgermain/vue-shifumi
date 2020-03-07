<template>
  <div>
    <div class="d-flex">
      <player-selection
        v-for="(player, index) in GameStore.state.players"
        :key="player.number"
        :readonly="index !== 0"
        :player="player"
        @input="GameStore.updatePlayer($event, index)"
      />
    </div>
    <button type="button" class="btn btn-primary" @click="start">Start</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import GameStore from '@/stores/GameStore'

import PlayerSelection from '@/components/PlayerSelection.vue'

export default Vue.extend({
  components: {
    PlayerSelection,
  },

  computed: {
    GameStore() {
      return GameStore
    },
  },

  methods: {
    start() {
      GameStore.updateScene('GAME')
    },
  },
})
</script>
