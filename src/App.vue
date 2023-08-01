<template>
  <div id="app" :class="['text-center', $style.app]">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Vue Shifumi</h1>
    <component :is="sceneComponent" :class="['mx-auto mt', $style.scene]" />
    <GithubCorner url="pascalgermain/vue-shifumi" />
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue'

import GameScene from '@/scenes/GameScene.vue'
import MenuScene from '@/scenes/MenuScene.vue'
import GameStore, { Scene } from '@/stores/GameStore'

import GithubCorner from '@/components/GithubCorner.vue'

const sceneComponents = {
  [Scene.MENU]: MenuScene,
  [Scene.GAME]: GameScene,
}

export default Vue.extend({
  components: {
    GithubCorner,
  },

  computed: {
    sceneComponent(): VueConstructor<Vue> {
      return sceneComponents[GameStore.state.scene]
    },
  },
})
</script>

<style module lang="scss">
.app {
  margin-top: 60px;
}

.scene {
  max-width: 1200px;
}
</style>
