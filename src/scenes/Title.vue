<template>
  <div>
    <button @click="start">start</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import sceneMixin from "./scene";
import Game from "./Game.vue";

export default defineComponent({
  name: "Title",
  components: {},
  ...sceneMixin,
  setup(_, { emit }) {
    const start = () => {
      emit("goScene", {
        scene: Game,
        props: {
          test: 10,
        },
      });
    };

    return {
      start,
    };
  },
});
</script>

<style scoped lang="scss"></style>
