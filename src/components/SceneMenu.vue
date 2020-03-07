<template>
  <div>
    <player-selection
      v-for="(player, index) in GameStore.state.players"
      :key="player.number"
      :player="player"
      @input="GameStore.updatePlayer($event, index)"
    />
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
})
</script>
