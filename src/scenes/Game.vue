<template>
  <div>
    <p>{{ test }}</p>
    <button @click="gameover">gameover</button>
    <ButtonTora />
    <ButtonMokugyo />
    <Gage value="0.5" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ButtonTora from "../components/ButtonTora.vue";
import ButtonMokugyo from "../components/ButtonMokugyo.vue";
import Gage from "../components/Gage.vue";

import sceneMixin from "./scene";
import Result from "./Result.vue";

export default defineComponent({
  name: "Game",
  components: {
    ButtonTora,
    ButtonMokugyo,
    Gage,
  },
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
