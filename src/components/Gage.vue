<template>
  <div class="gage">
    <div class="value" :style="{ width: `${value * 100}%` }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Gage",
  props: {
    value: Number,
  },
});
</script>

<style scoped lang="scss">
.gage {
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
