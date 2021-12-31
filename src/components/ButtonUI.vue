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
  padding: 1rem 2rem;
  margin-top: 30px;

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
