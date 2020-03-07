<template>
  <div :class="$style.container">
    <h2>Player {{ player.number }}</h2>
    <select :value="player.type" @input="updateType">
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
    player: Object as () => Player,
  },

  computed: {
    playerTypes() {
      return playerTypes
    },
  },

  methods: {
    updateType(event: Event) {
      const type = (event.target as HTMLSelectElement).value
      this.$emit('input', {
        ...this.player,
        type,
      })
    },
  },
})
</script>

<style module lang="scss">
.container {
  display: flex;
  flex-direction: column;
  width: 100%;

  select {
    margin: 20px auto 0;
  }
}
</style>
