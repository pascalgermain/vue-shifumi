<template>
  <div>
    <div class="flex">
      <div v-for="(player, index) in players" :key="player.number" class="flex flex-column w-full">
        <h2>Player {{ player.number }}</h2>
        <div class="flex mx-auto">
          <choice-image :choice="choices[index]" :number="player.number" />
        </div>
      </div>
    </div>
    <h2>{{ score }}</h2>
    <button type="button" class="btn btn-primary mx mt" @click="update('start')">Replay</button>
    <button type="button" class="btn btn-primary mx mt" @click="update('menu')">Menu</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import GameStore, { Choice } from '@/stores/GameStore'

import ChoiceImage from '@/components/ChoiceImage.vue'

export default Vue.extend({
  components: {
    ChoiceImage,
  },

  computed: {
    players() {
      return GameStore.state.players
    },

    choices() {
      return GameStore.state.choices
    },

    choiceKeys() {
      return Object.keys(Choice) as (keyof typeof Choice)[]
    },

    choiceIndexes(): number[] {
      return this.choices.map(choice =>
        this.choiceKeys.findIndex(choiceKey => choice === choiceKey),
      )
    },

    winner(): number | null {
      if (this.choices[0] === this.choices[1]) return null
      const diff = this.choiceIndexes[1] - this.choiceIndexes[0]
      return diff === 1 || diff === -2 ? 1 : 2
    },

    score(): string {
      return this.winner === null ? 'Nobody wins :(' : `Player ${this.winner} wins :)`
    },
  },

  methods: {
    update(name: string) {
      this.$emit(name)
    },
  },
})
</script>
