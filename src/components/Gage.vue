<template>
  <div class="gage">
    <div class="value" :style="{ width: `${value}%` }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import { state } from "../lib/game";
import { TIME_MS_MAX } from "../lib/consts";

export default defineComponent({
  name: "Gage",
  setup() {
    return {
      value: computed(() => (state.timeMs / TIME_MS_MAX) * 100),
    };
  },
});
</script>

<style scoped lang="scss">
.gage {
  margin-top: 20px;

  width: 90%;
  height: 20px;

  border: white solid 3px;
  background-color: gray;

  .value {
    height: 100%;

    background-color: hotpink;
  }
}
</style>
