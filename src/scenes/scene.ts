/* eslint-disable @typescript-eslint/no-explicit-any */
import { DefineComponent } from "vue";

export type SceneComponent<P> = DefineComponent<
  P,
  any,
  any,
  any,
  any,
  any,
  any,
  SceneMixin["emits"]
>;

interface SceneMixin {
  emits: {
    // XXX:
    //   Ganerics doesn't work for type checking on calling `goScene()` in components' `setup()`.
    //   In the context, it is regarded that P is unknown.
    goScene: <P>(next: { scene: SceneComponent<P>; props?: P }) => boolean;
  };
}

const mixin: SceneMixin = {
  emits: {
    goScene: (next) => !!next,
  },
};

export default mixin;