<template>
  <div class="tora-buttons">
    <div class="button" @click="clickLeft">
      <img
        :src="src"
        :style="{ visibility: tora === 'left' ? 'visible' : 'hidden' }"
      />
    </div>
    <div class="button" @click="clickRight">
      <img
        :src="src"
        :style="{ visibility: tora === 'right' ? 'visible' : 'hidden' }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { state, clickLeft, clickRight } from "../lib/game";

export default defineComponent({
  name: "ButtonTora",
  components: {},
  props: {},
  setup() {
    return {
      src: require("../assets/ui/tora.png"),
      tora: computed(() => state.tora),
      clickLeft,
      clickRight,
    };
  },
});
</script>

<style scoped lang="scss">
.tora-buttons {
  width: 90%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .button {
    width: 45%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: white;

    &:not(:active) {
      border: 1px black solid;
      padding: 2px;
    }

    &:active {
      border: 3px green solid;
    }

    img {
      width: 100%;
    }
  }
}
</style>
