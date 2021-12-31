<template>
  <component :is="scene.component" v-bind="scene.props" @goScene="goScene" />
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
      props: unknown;
    } = shallowReactive({
      component: Scenes.Title,
      props: {},
    });

    const goScene = (next: { scene: SceneComponent; props: unknown }) => {
      scene.component = next.scene;
      scene.props = next.props;
    };

    return {
      scene,
      goScene,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
