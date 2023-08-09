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

import game, { choices } from '@/stores/game'

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

    score(): string {
      if (this.choices[0] === this.choices[1]) return 'Nobody wins :('
      const choiceIndexes = this.choices.map((playerChoice) => choices.findIndex((choice) => playerChoice === choice))
      const diff = choiceIndexes[1] - choiceIndexes[0]
      const winner = diff === 1 || diff === -2 ? 1 : 2
      return `Player ${winner} wins :)`
    },
  },

  methods: {
    update(name: string) {
      this.$emit(name)
    },
  },
})
</script>
