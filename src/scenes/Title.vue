<template>
  <div>
    <h1>とらあつめ</h1>

    <h2>ちゅうい</h2>
    <ul>
      <li>音が出ます。</li>
      <li>ルール説明は面倒なので省きました。察してください。</li>
    </ul>

    <h2>くれじっと</h2>
    <ul>
      <li>IMAGE: <a href="https://www.irasutoya.com/">いらすとや</a></li>
      <li>BGM: <a href="https://maou.audio/">魔王魂</a></li>
      <li>
        SE: <a href="https://umipla.com/">効果音工房</a>,
        <a href="https://soundeffect-lab.info/">効果音ラボ</a>,
        <a href="https://otologic.jp/">OtoLogic</a>
      </li>
    </ul>

    <div class="button" @click="start">すたーと</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import sceneMixin from "./scene";
import Game from "./Game.vue";

export default defineComponent({
  name: "Title",
  components: {},
  ...sceneMixin,
  setup(_, { emit }) {
    const start = () => {
      emit("goScene", {
        scene: Game,
      });
    };

    return {
      start,
    };
  },
});
</script>

<style scoped lang="scss">
.button {
  background-color: white;
  border: 1px black solid;
  padding: 1rem 2rem;
  margin: 30px;
}
</style>
