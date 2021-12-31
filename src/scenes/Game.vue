<template>
  <div>
    <Question />
    <ButtonTora />
    <ButtonMokugyo />
    <Gage />
  </div>
</template>

<script lang="ts">
import { computed, watchEffect, defineComponent } from "vue";

import { initialize, state, start } from "../lib/game";

import Question from "../components/Question.vue";
import ButtonTora from "../components/ButtonTora.vue";
import ButtonMokugyo from "../components/ButtonMokugyo.vue";
import Gage from "../components/Gage.vue";

import sceneMixin from "./scene";
import Result from "./Result.vue";

export default defineComponent({
  name: "Game",
  components: {
    Question,
    ButtonTora,
    ButtonMokugyo,
    Gage,
  },
  ...sceneMixin,
  setup(_, { emit }) {
    initialize();
    start();

    // TODO: uncomment
    // watchEffect(() => {
    //   if (state.gameoverBy) {
    //     emit("goScene", {
    //       scene: Result,
    //     });
    //   }
    // });

    return {};
  },
});
</script>

<style scoped lang="scss"></style>
