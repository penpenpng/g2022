<template>
  <div class="mokugyo">
    <img @click="onClick" src="../assets/ui/mokugyo.png" />
    <div v-if="isBroken" class="effect-broken">
      <div class="text">こわれた！</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonMokugyo",
  components: {},
  props: {
    isBroken: Boolean,
  },
  emits: ["click"],
  setup(props, { emit }) {
    return {
      onClick: () => {
        if (!props.isBroken) emit("click");
      },
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
