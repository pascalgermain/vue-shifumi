<template>
  <div id="app" class="text-center">
    <GithubCorner url="pascalgermain/vue-shifumi" />

    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Shifumi</h1>

    <Component :is="sceneComponent" :class="['mx-auto mt', $style.scene]" />
  </div>
</template>

<script lang="ts">
import { Component, defineComponent } from 'vue'

import game, { Scene } from '@/stores/game'

import GithubCorner from './components/GithubCorner.vue'
import GameScene from './scenes/GameScene.vue'
import MenuScene from './scenes/MenuScene.vue'

const sceneComponents = {
  [Scene.MENU]: MenuScene,
  [Scene.GAME]: GameScene,
}

export default defineComponent({
  components: { GithubCorner },

  computed: {
    sceneComponent(): Component {
      return sceneComponents[game.state.scene]
    },
  },
})
</script>

<style lang="scss">
#app {
  margin-top: 50px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $secondary;
}
</style>

<style module lang="scss">
.scene {
  max-width: 1200px;
}
</style>
