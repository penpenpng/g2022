<template>
  <div>
    <h1>げーむおーばー</h1>

    <Question v-if="message" />

    <div
      v-if="message"
      style="white-space: pre-line; text-align: center; margin-top: 10px"
    >
      {{ message }}
    </div>

    <h2>すこあ</h2>
    <div>{{ totalScore }}</div>

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
import Question from "../components/Question.vue";

import sceneMixin from "./scene";
import Title from "./Title.vue";
import Game from "./Game.vue";

export default defineComponent({
  name: "Result",
  components: {
    Question,
    ButtonUI,
  },
  ...sceneMixin,
  setup(_, { emit }) {
    const solvedScore = computed(() => state.solved * 20);
    const mokugyoScore = computed(() => state.mokugyoHits * 5);
    const clearScore = computed(() => (state.gameoverBy !== "wrong" ? 50 : 0));
    const destroyScore = computed(() => (state.mokugyoBroken ? 50 : 0));
    const totalScore = computed(
      () =>
        solvedScore.value +
        mokugyoScore.value +
        clearScore.value +
        destroyScore.value
    );

    return {
      lastImage: computed(() => state.question.src),
      message: computed(() => {
        if (state.gameoverBy === "wrong") {
          if (state.question.isTora) {
            return `ざんねん！\n「${state.question.name}」はとらです！`;
          } else {
            return `ざんねん！\n「${state.question.name}」はとらではありません！`;
          }
        } else {
          return null;
        }
      }),
      solvedScore,
      mokugyoScore,
      clearScore,
      destroyScore,
      totalScore,
      tweet: () => {
        const text = `あけましておめでとう！私はうしあつめで ${totalScore.value} 点獲得しました！`;
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
