<template>
  <div>{{ message }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { preload } from "../lib/assets";

import sceneMixin from "./scene";
// TODO: ./Title.vue に戻す
import Title from "./Game.vue";

export default defineComponent({
  name: "Loading",
  components: {},
  ...sceneMixin,
  setup(_, { emit }) {
    const message = ref("ロード中……");

    preload()
      .then(() => {
        emit("goScene", {
          scene: Title,
        });
      })
      .catch(() => {
        message.value =
          "アセットの読み込みに失敗しました。リロードを試してみてください。";
      });

    return {
      message,
    };
  },
});
</script>

<style scoped lang="scss"></style>
