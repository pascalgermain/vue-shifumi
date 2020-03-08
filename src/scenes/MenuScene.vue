<template>
  <div>
    <div class="flex">
      <player-selection
        v-for="(player, index) in players"
        :key="player.number"
        :player="player"
        @input="updatePlayer($event, index)"
      />
    </div>
    <button type="button" class="btn btn-primary mt" @click="play">Play</button>
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
    players() {
      return GameStore.state.players
    },

    updatePlayer() {
      return GameStore.updatePlayer
    },
  },

  methods: {
    play() {
      GameStore.updateScene('GAME')
    },
  },
})
</script>
