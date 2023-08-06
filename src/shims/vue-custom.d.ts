import Vue from 'vue' // eslint-disable-line @typescript-eslint/no-unused-vars

import { Dictionary } from '@/utils/types'

declare module 'vue/types/vue' {
  interface Vue {
    $style: Dictionary<string>
  }
}
