<template>
  <div>
    <div class="flex">
      <PlayerSelection
        v-for="(player, index) in players"
        :key="player.number"
        :player="player"
        @input="updatePlayer($event, index)"
      />
    </div>
    <button class="btn btn-primary mt" @click="play">Play</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import game from '@/stores/game'

import PlayerSelection from '@/components/PlayerSelection.vue'

export default defineComponent({
  components: { PlayerSelection },

  computed: {
    players(): typeof game.state.players {
      return game.state.players
    },

    updatePlayer(): typeof game.updatePlayer {
      return game.updatePlayer
    },
  },

  methods: {
    play() {
      game.updateScene('GAME')
    },
  },
})
</script>
