<template>
  <div :class="['text-primary', $style.text, { [$style.hidden]: hidden }]">{{ text }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { sleep } from '@/utils/common'

const timing = 200

export default defineComponent({
  data() {
    return {
      text: '',
      hidden: true,
    }
  },

  computed: {
    transitionDuration(): number {
      return parseInt(this.$style.transitionDuration)
    },
  },

  async mounted() {
    await this.updateText('Shi')
    await this.updateText('Fu')
    await this.updateText('Mi')
    this.$emit('done')
  },

  methods: {
    async updateText(text: string) {
      this.text = text
      this.hidden = false
      await sleep(this.transitionDuration + timing)
      this.hidden = true
      await sleep(this.transitionDuration)
      this.text = ''
      await sleep(timing)
    },
  },
})
</script>

<style module lang="scss">
:export {
  transitionDuration: $transition-duration;
}

.text {
  margin-top: 80px;
  font-size: 40px;
  font-weight: bold;
  transition: opacity $transition-duration;
}

.hidden {
  opacity: 0;
}
</style>
