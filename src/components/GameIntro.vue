<template>
  <div>
    <div :class="[$style.text, { [$style.hidden]: hidden }]">{{ text }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { sleep } from '@/helpers/commonHelpers'

const timing = 300

export default Vue.extend({
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
  margin-top: 90px;
  font-size: 40px;
  font-weight: bold;
  transition: opacity $transition-duration;
  color: $primary;
}

.hidden {
  opacity: 0;
}
</style>
