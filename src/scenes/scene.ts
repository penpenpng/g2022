import {
  ComponentOptionsMixin,
  ComputedOptions,
  DefineComponent,
  MethodOptions,
} from "vue";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type SceneComponent = DefineComponent<
  any,
  any,
  any,
  ComputedOptions,
  MethodOptions,
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  SceneMixin["emits"]
>;

interface SceneMixin {
  emits: {
    goScene: (next: { scene: SceneComponent }) => boolean;
  };
}

const mixin: SceneMixin = {
  emits: {
    goScene: (next) => !!next,
  },
};

export default mixin;
