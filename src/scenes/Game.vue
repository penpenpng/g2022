<template>
  <div>
    <p>{{ test }}</p>
    <button @click="gameover">gameover</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import sceneMixin from "./scene";

import Result from "./Result.vue";

export default defineComponent({
  name: "Game",
  components: {},
  props: {
    test: Number,
  },
  ...sceneMixin,
  setup(_, { emit }) {
    const gameover = () => {
      emit("goScene", {
        scene: Result,
      });
    };

    return {
      gameover,
    };
  },
});
</script>

<style scoped lang="scss"></style>
