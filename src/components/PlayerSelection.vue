<template>
  <div class="d-flex flex-column w-100">
    <h2>Player {{ player.number }}</h2>
    <select :class="$style.select" :value="player.type" @input="updateType">
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
  },

  methods: {
    updateType(event: Event) {
      const type = (event.target as HTMLSelectElement).value
      this.$emit('input', { ...this.player, type })
    },
  },
})
</script>

<style module lang="scss">
.select {
  margin: 20px auto;
}
</style>
