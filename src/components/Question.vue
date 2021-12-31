<template>
  <div class="question">
    <img :src="src" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";

import { state } from "../lib/game";
import { Question } from "../lib/questions";

export default defineComponent({
  name: "Question",
  components: {},
  props: {
    question: Object as PropType<Question>,
  },
  emits: {},
  setup() {
    return {
      src: computed(() => state.question.src),
    };
  },
});
</script>

<style scoped lang="scss">
.question {
  width: 90%;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px black solid;
  background-color: white;

  img {
    width: 100%;
  }
}
</style>
