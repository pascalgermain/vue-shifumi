<template>
  <div :class="['d-flex flex-column w-100', $style.container, { [$style.readonly]: readonly }]">
    <h2>Player {{ player.number }}</h2>
    <div class="d-flex m-auto">
      <img
        v-for="(image, index) in images"
        v-let="[(title = ucfirst(choices[index], true))]"
        :key="index"
        :src="image"
        :alt="title"
        :title="title"
        :class="$style.image"
        @click="!readonly && update(index)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { ucfirst } from '@/helpers/commonHelpers'
import { Player, Choice } from '@/stores/GameStore'

export default Vue.extend({
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

    images(): string[] {
      const { number } = this.player
      return this.choices.map(choice =>
        require(`@/assets/choices/${choice.toLowerCase()}_${number}.png`),
      )
    },

    readonly(): boolean {
      return this.player.type === 'COMPUTER' || !!this.choice
    },

    ucfirst() {
      return ucfirst
    },
  },

  mounted() {
    if (this.readonly) this.computerChoose()
  },

  methods: {
    computerChoose() {
      const index = Math.floor(Math.random() * this.choices.length)
      this.update(index)
    },

    update(index: number) {
      this.choice = this.choices[index]
      this.$emit('input', this.choice)
    },
  },
})
</script>

<style module lang="scss">
.image {
  width: 57px;
  height: 57px;
  margin: 20px 4px 0;
  border: 1px;

  .container:not(.readonly) & {
    cursor: pointer;
  }
}
</style>
