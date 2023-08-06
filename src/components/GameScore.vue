<template>
  <div>
    <div class="flex">
      <div v-for="(player, index) in players" :key="player.number" class="flex flex-column w-full">
        <h2>Player {{ player.number }}</h2>
        <div class="flex mx-auto">
          <ChoiceImage :choice="choices[index]" :number="player.number" />
        </div>
      </div>
    </div>
    <h2>{{ score }}</h2>
    <button class="btn btn-primary mx mt" @click="update('start')">Replay</button>
    <button class="btn btn-primary mx mt" @click="update('menu')">Menu</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import game, { Choice } from '@/stores/game'

import ChoiceImage from '@/components/ChoiceImage.vue'

export default defineComponent({
  components: { ChoiceImage },

  computed: {
    players(): typeof game.state.players {
      return game.state.players
    },

    choices(): typeof game.state.choices {
      return game.state.choices
    },

    choiceKeys(): (keyof typeof Choice)[] {
      return Object.keys(Choice) as (keyof typeof Choice)[]
    },

    choiceIndexes(): number[] {
      return this.choices.map((choice) => this.choiceKeys.findIndex((choiceKey) => choice === choiceKey))
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
