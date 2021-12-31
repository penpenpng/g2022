import { SceneComponent as _SceneComponent } from "./scene";

import Loading from "./Loading.vue";
import Title from "./Title.vue";
import Game from "./Game.vue";
import Result from "./Result.vue";

export type SceneComponent = _SceneComponent;

export const Scenes = {
  Loading,
  Title,
  Game,
  Result,
} as const;
