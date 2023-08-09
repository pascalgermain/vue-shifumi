<template>
  <div class="flex flex-column w-full">
    <h2>Player {{ player.number }}</h2>

    <div class="flex mx-auto">
      <ChoiceImage
        v-for="(choice, index) in choices"
        :key="choice"
        :choice="choice"
        :number="player.number"
        :clickable="!readonly"
        :disabled="isComputer"
        :active="selected[index]"
        @click="update(index)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { Choice, choices, Player } from '@/stores/game'
import { getRandomInt } from '@/utils/common'

import ChoiceImage from '@/components/ChoiceImage.vue'

export default defineComponent({
  components: { ChoiceImage },

  props: {
    player: { type: Object as PropType<Player>, required: true },
  },

  setup() {
    return { choices }
  },

  data() {
    return {
      playerChoice: null as keyof typeof Choice | null,
    }
  },

  computed: {
    isComputer(): boolean {
      return this.player.type === 'COMPUTER'
    },

    readonly(): boolean {
      return this.isComputer || !!this.playerChoice
    },

    selected(): boolean[] {
      return choices.map((choice) => !this.isComputer && this.playerChoice === choice)
    },
  },

  mounted() {
    if (this.isComputer) this.computerChoose()
  },

  methods: {
    computerChoose() {
      const index = getRandomInt(choices.length)
      this.update(index)
    },

    update(index: number) {
      this.playerChoice = choices[index]
      this.$emit('input', this.playerChoice)
    },
  },
})
</script>
