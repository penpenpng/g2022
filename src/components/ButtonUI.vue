<template>
  <div class="button">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonUI",
  components: {},
  props: {},
});
</script>

<style scoped lang="scss">
.button {
  padding: 10px 15px;
  margin-top: 10px;

  background-color: white;
  border: 1px black solid;

  &:not(:active) {
    border: 1px black solid;
  }

  &:active,
  &:hover {
    border: 3px green solid;
  }
}
</style>
