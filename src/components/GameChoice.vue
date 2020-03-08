<template>
  <div class="flex">
    <player-choice
      v-for="(player, index) in players"
      :key="player.number"
      :player="player"
      @input="update($event, index)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import GameStore, { Choice } from '@/stores/GameStore'

import PlayerChoice from '@/components/PlayerChoice.vue'

export default Vue.extend({
  components: {
    PlayerChoice,
  },

  computed: {
    players() {
      return GameStore.state.players
    },

    allChose(): boolean {
      return GameStore.state.choices.every(choice => choice)
    },
  },

  created() {
    GameStore.resetChoices()
  },

  methods: {
    update(choice: keyof typeof Choice, index: number) {
      GameStore.updateChoice(choice, index)
      if (this.allChose) this.$emit('done')
    },
  },
})
</script>
