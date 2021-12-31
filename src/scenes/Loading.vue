<template>
  <div>ロード中</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { preload } from "../lib/questions";

import sceneMixin from "./scene";
import Title from "./Title.vue";

export default defineComponent({
  name: "Loading",
  components: {},
  ...sceneMixin,
  setup(_, { emit }) {
    preload().then(() => {
      emit("goScene", {
        scene: Title,
      });
    });
  },
});
</script>

<style scoped lang="scss"></style>
