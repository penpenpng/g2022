<template>
  <div class="tora-buttons">
    <div class="button" @click="buttons.left.onClick">
      <img
        :src="src"
        :style="{ visibility: buttons.left.isTora ? 'visible' : 'hidden' }"
      />
    </div>
    <div class="button" @click="buttons.right.onClick">
      <img
        :src="src"
        :style="{ visibility: buttons.right.isTora ? 'visible' : 'hidden' }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, shallowReactive } from "vue";

export default defineComponent({
  name: "ButtonTora",
  components: {},
  props: {},
  emits: ["clickTora", "clickNone"],
  setup(_, { emit }) {
    const TORA_BUTTON = {
      isTora: true,
      onClick: () => {
        emit("clickTora");
        shuffleButtons();
      },
    };

    const NONE_BUTTON = {
      isTora: false,
      onClick: () => {
        emit("clickNone");
        shuffleButtons();
      },
    };

    type Button = typeof TORA_BUTTON | typeof NONE_BUTTON;

    const buttons = shallowReactive({
      right: TORA_BUTTON as Button,
      left: NONE_BUTTON as Button,
    });

    const shuffleButtons = () => {
      const rand = Math.random() < 0.5;

      buttons.right = rand ? TORA_BUTTON : NONE_BUTTON;
      buttons.left = !rand ? TORA_BUTTON : NONE_BUTTON;
    };

    shuffleButtons();

    return {
      src: require("../assets/ui/tora.png"),
      buttons,
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
