import { SceneComponent as _SceneComponent } from "./scene";

import Title from "./Title.vue";
import Game from "./Game.vue";
import Result from "./Game.vue";

export type SceneComponent = _SceneComponent<unknown>;

export const Scenes = {
  Title,
  Game,
  Result,
} as const;
