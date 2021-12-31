<template>
  <div>
    <h1>とらあつめ</h1>

    <h2>ちゅうい</h2>
    <ul>
      <li>おとがでます。</li>
      <li>るーるせつめいはありません。めんどくさかったからです。</li>
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

    <ButtonUI @click="start">すたーと</ButtonUI>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import sceneMixin from "./scene";
import Game from "./Game.vue";

import ButtonUI from "../components/ButtonUI.vue";

export default defineComponent({
  name: "Title",
  components: {
    ButtonUI,
  },
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
