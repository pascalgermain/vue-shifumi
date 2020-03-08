<template>
  <div class="flex flex-column w-full">
    <h2>Player {{ player.number }}</h2>
    <select v-model="type" class="mx-auto mt">
      <option v-for="(text, value) in playerTypes" :key="value" :value="value">{{ text }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { Player, PlayerType } from '@/stores/GameStore'

const playerTypes = {
  [PlayerType.HUMAN]: 'Human',
  [PlayerType.COMPUTER]: 'Computer',
}

export default Vue.extend({
  props: {
    player: { type: Object as () => Player, required: true },
  },

  computed: {
    playerTypes() {
      return playerTypes
    },

    type: {
      get(): Player['type'] {
        return this.player.type
      },
      set(type: Player['type']) {
        this.$emit('input', { ...this.player, type })
      },
    },
  },
})
</script>
