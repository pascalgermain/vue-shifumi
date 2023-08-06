<template>
  <div class="flex">
    <PlayerChoice
      v-for="(player, index) in players"
      :key="player.number"
      :player="player"
      @input="update($event, index)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import game, { Choice } from '@/stores/game'

import PlayerChoice from '@/components/PlayerChoice.vue'

export default defineComponent({
  components: { PlayerChoice },

  computed: {
    players(): typeof game.state.players {
      return game.state.players
    },

    allChose(): boolean {
      return game.state.choices.every((choice) => choice)
    },
  },

  created() {
    game.resetChoices()
  },

  methods: {
    update(choice: keyof typeof Choice, index: number) {
      game.updateChoice(choice, index)
      if (this.allChose) this.$emit('done')
    },
  },
})
</script>
