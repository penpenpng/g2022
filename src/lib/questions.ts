export interface Question {
  name: string;
  src: string;
  isTora: boolean;
}

export const QUESTIONS: Question[] = [
  {
    name: "トラウマ",
    src: require("../assets/questions/trauma.png"),
    isTora: true,
  },
  {
    name: "トラック",
    src: require("../assets/questions/car_truck.png"),
    isTora: true,
  },
];

export const pick = (): Question =>
  QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
