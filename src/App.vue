<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Vue Shifumi</h1>
    <component :is="sceneComponent" />
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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  margin: 20px 0 0;
}

h2,
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
