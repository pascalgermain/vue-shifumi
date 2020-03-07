<template>
  <div id="app" :class="$style.app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Vue Shifumi</h1>
    <component :is="sceneComponent" :class="$style.scene" />
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue'

import GameStore, { Scenes } from '@/stores/GameStore'

import SceneMenu from '@/components/SceneMenu.vue'
import SceneGame from '@/components/SceneGame.vue'

const sceneComponents = {
  [Scenes.MENU]: SceneMenu,
  [Scenes.GAME]: SceneGame,
}

export default Vue.extend({
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
  text-align: center;
}

.scene {
  max-width: 1200px;
  margin: 40px auto 0;
}
</style>
