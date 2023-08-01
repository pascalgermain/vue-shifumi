<template>
  <div class="flex flex-column w-full">
    <h2>Player {{ player.number }}</h2>
    <div class="flex mx-auto">
      <choice-image
        v-for="(choice, index) in choices"
        :key="choice"
        :choice="choice"
        :number="player.number"
        :clickable="!readonly"
        :disabled="isComputer"
        :active="selected(index)"
        @click="update(index)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { Choice, Player } from '@/stores/GameStore'

import ChoiceImage from '@/components/ChoiceImage.vue'

export default Vue.extend({
  components: {
    ChoiceImage,
  },

  props: {
    player: { type: Object as () => Player, required: true },
  },

  data() {
    return {
      choice: null as keyof typeof Choice | null,
    }
  },

  computed: {
    choices() {
      return Object.keys(Choice) as (keyof typeof Choice)[]
    },

    isComputer() {
      return this.player.type === 'COMPUTER'
    },

    readonly(): boolean {
      return this.isComputer || !!this.choice
    },
  },

  mounted() {
    if (this.isComputer) this.computerChoose()
  },

  methods: {
    computerChoose() {
      const index = Math.floor(Math.random() * this.choices.length)
      this.update(index)
    },

    selected(index: number) {
      return !this.isComputer && this.choice === this.choices[index]
    },

    update(index: number) {
      this.choice = this.choices[index]
      this.$emit('input', this.choice)
    },
  },
})
</script>
