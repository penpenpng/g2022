<template>
  <div class="mokugyo">
    <img @click="hitMokugyo" src="../assets/ui/mokugyo.png" />
    <div v-if="isBroken" class="effect-broken">
      <div class="text">こわれた！</div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { state, hitMokugyo } from "../lib/game";

export default defineComponent({
  name: "ButtonMokugyo",
  components: {},
  setup() {
    return {
      isBroken: computed(() => state.mokugyoBroken),
      hitMokugyo,
    };
  },
});
</script>

<style scoped lang="scss">
$size: 100px;

.mokugyo {
  position: relative;

  width: $size;
  height: $size;

  > img {
    width: $size;
    height: $size;
  }

  > .effect-broken {
    position: absolute;
    top: 0;
    left: 0;

    width: $size;
    height: $size;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.6);

    .text {
      background-color: white;

      transform: rotateZ(-20deg);
    }
  }
}
</style>
