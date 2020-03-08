<template>
  <img v-bind="{ src, alt, title }" :class="classes" @click="click" />
</template>

<script lang="ts">
import Vue from 'vue'

import { ucfirst } from '@/helpers/commonHelpers'
import { Choice } from '@/stores/GameStore'

export default Vue.extend({
  props: {
    choice: { type: String as () => keyof typeof Choice, required: true },
    number: { type: Number, required: true },
    clickable: Boolean,
    disabled: Boolean,
    active: Boolean,
  },

  computed: {
    choiceLower(): string {
      return this.choice.toLowerCase()
    },

    src(): string {
      return require(`@/assets/choices/${this.choiceLower}_${this.number}.png`)
    },

    alt(): string {
      return ucfirst(this.choiceLower)
    },

    title(): string {
      return this.disabled ? '' : this.alt
    },

    classes(): unknown {
      return [
        this.$style.image,
        {
          [this.$style.clickable]: this.clickable,
          [this.$style.disabled]: this.disabled,
          [this.$style.active]: this.active,
        },
      ]
    },
  },

  methods: {
    click() {
      if (this.clickable) this.$emit('click')
    },
  },
})
</script>

<style module lang="scss">
$border-width: 3px;

.image {
  width: 57px;
  height: 57px;
  margin: 20px 4px 0;
}

.clickable {
  cursor: pointer;
}

.disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.active {
  margin: (20px - $border-width) (4px - $border-width) (0 - $border-width);
  border: $border-width solid $primary;
}
</style>
