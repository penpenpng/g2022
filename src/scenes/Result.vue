<template>
  <div>
    <button @click="restart">restart</button>
    <button @click="goTitle">goTitle</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import sceneMixin from "./scene";
import Title from "./Title.vue";
import Game from "./Game.vue";

export default defineComponent({
  name: "Result",
  components: {},
  ...sceneMixin,
  setup(_, { emit }) {
    const goTitle = () => {
      emit("goScene", {
        scene: Title,
      });
    };

    const restart = () => {
      emit("goScene", {
        scene: Game,
      });
    };

    return {
      restart,
      goTitle,
    };
  },
});
</script>

<style scoped lang="scss"></style>
