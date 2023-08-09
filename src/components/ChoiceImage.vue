<template>
  <input type="image" v-bind="{ src, alt }" :class="classes" @click="click" />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { Choice } from '@/stores/game'
import { ucfirst } from '@/utils/common'
import { CssClass } from '@/utils/types'

export default defineComponent({
  props: {
    choice: { type: String as PropType<keyof typeof Choice | null>, required: true },
    number: { type: Number, required: true },
    clickable: Boolean,
    disabled: Boolean,
    active: Boolean,
  },

  computed: {
    choiceLower(): string {
      return this.choice?.toLowerCase() || ''
    },

    src(): string {
      return this.choice ? require(`@/assets/choices/${this.choiceLower}_${this.number}.png`) : ''
    },

    alt(): string {
      return ucfirst(this.choiceLower)
    },

    classes(): CssClass {
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

  &:not(.clickable) {
    cursor: default;
  }
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
