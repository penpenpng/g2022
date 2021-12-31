<template>
  <component class="scene" :is="scene.component" @goScene="goScene" />
</template>

<script lang="ts">
import { defineComponent, shallowReactive } from "vue";

import { Scenes, SceneComponent } from "./scenes";

export default defineComponent({
  name: "App",
  components: {
    ...Scenes,
  },
  setup() {
    const scene: {
      component: SceneComponent;
    } = shallowReactive({
      component: Scenes.Loading,
    });

    const goScene = (next: { scene: SceneComponent }) => {
      scene.component = next.scene;
    };

    return {
      scene,
      goScene,
    };
  },
});
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;

  width: 100vw;
  height: 100vh;

  overflow: hidden;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
}

#app {
  padding: 20px;

  width: 100%;
  max-width: 600px;
  height: 100%;
  max-height: 1400px;

  background-color: lightgreen;

  & > .scene {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
