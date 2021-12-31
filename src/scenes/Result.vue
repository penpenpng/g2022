<template>
  <div>
    <h1>げーむおーばー</h1>

    <div v-if="message" style="white-space: pre-line; text-align: center">
      {{ message }}
    </div>

    <h2>すこあ</h2>
    <div>{{ solvedScore + mokugyoScore + clearScore + destroyScore }}</div>

    <ul>
      <li v-if="solvedScore > 0">あつめたとら: {{ solvedScore }}</li>
      <li v-if="mokugyoScore > 0">もくぎょ: {{ mokugyoScore }}</li>
      <li v-if="clearScore > 0">のーみす: {{ clearScore }}</li>
      <li v-if="destroyScore > 0">もくぎょはかい: {{ destroyScore }}</li>
    </ul>

    <ButtonUI @click="tweet">ついーと</ButtonUI>
    <ButtonUI @click="restart">もっかい</ButtonUI>
    <ButtonUI @click="goTitle">たいとるにもどる</ButtonUI>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { state } from "../lib/game";

import ButtonUI from "../components/ButtonUI.vue";

import sceneMixin from "./scene";
import Title from "./Title.vue";
import Game from "./Game.vue";

export default defineComponent({
  name: "Result",
  components: {
    ButtonUI,
  },
  ...sceneMixin,
  setup(_, { emit }) {
    return {
      message: computed(() => {
        if (state.gameoverBy === "wrong") {
          return `ざんねん！\n「${state.question.name}」はとらではありません！`;
        } else {
          return null;
        }
      }),
      solvedScore: computed(() => state.solved * 20),
      mokugyoScore: computed(() => state.mokugyoHits * 5),
      clearScore: computed(() => (state.gameoverBy !== "wrong" ? 50 : 0)),
      destroyScore: computed(() => (state.mokugyoBroken ? 50 : 0)),
      tweet: () => {
        const text = "ぽわ";
        const url = `https://twitter.com/intent/tweet?text=${encodeURI(
          text
        )}&url=${encodeURI(window.location.href)}`;

        window.open(url);
      },
      restart: () => {
        emit("goScene", {
          scene: Game,
        });
      },
      goTitle: () => {
        emit("goScene", {
          scene: Title,
        });
      },
    };
  },
});
</script>

<style scoped lang="scss"></style>
