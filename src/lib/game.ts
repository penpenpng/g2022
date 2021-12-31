import { reactive } from "vue";

import { pick, Question } from "./questions";
import { TIME_MS_MAX, TIME_DELTA } from "./consts";

interface State {
  question: Question;
  timer: null | number;
  timeMs: number;
  solved: number;
  mokugyoHits: number;
  mokugyoBroken: boolean;
  tora: "left" | "right";
  gameoverBy: null | "timeover" | "wrong";
}

export const state: State = reactive({
  question: null,
  timer: null,
  timeMs: null,
  solved: null,
  mokugyoHits: null,
  mokugyoBroken: null,
  tora: null,
  gameoverBy: null,
}) as unknown as State;

export const initialize = (): void => {
  state.question = pick();
  state.timer = null;
  state.timeMs = TIME_MS_MAX;
  state.solved = 0;
  state.mokugyoHits = 0;
  state.mokugyoBroken = false;
  state.tora = Math.random() < 0.5 ? "left" : "right";
  state.gameoverBy = null;
};

export const start = (): void => {
  state.timer = setInterval(() => {
    state.timeMs -= TIME_DELTA;

    if (state.timeMs <= 0 && !state.gameoverBy) {
      gameover("timeover");
    }
  }, TIME_DELTA);
};

const onCorrect = (): void => {
  state.question = pick();
  state.solved++;
  state.tora = Math.random() < 0.5 ? "left" : "right";
};

const gameover = (reason: "timeover" | "wrong"): void => {
  console.log(reason);

  state.gameoverBy = reason;

  if (state.timer) {
    clearInterval(state.timer);
    state.timer = null;
  }
};

export const clickLeft = (): void => {
  const isCorrect =
    (state.tora === "left" && state.question.isTora) ||
    (state.tora === "right" && !state.question.isTora);

  if (isCorrect) {
    onCorrect();
  } else {
    gameover("wrong");
  }
};

export const clickRight = (): void => {
  const isCorrect =
    (state.tora === "right" && state.question.isTora) ||
    (state.tora === "left" && !state.question.isTora);

  if (isCorrect) {
    onCorrect();
  } else {
    gameover("wrong");
  }
};

export const hitMokugyo = (): void => {
  // TODO: 木魚が壊れる確率の式を考える
  // TODO: 木魚で回復する時間の式を考える

  state.mokugyoHits++;
  state.timeMs = Math.min(state.timeMs + 30, TIME_MS_MAX);
};
