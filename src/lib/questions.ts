export interface Question {
  name: string;
  src: string;
  isTora: boolean;
}

const QUESTIONS: Question[] = [
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

export const preload = (): Promise<HTMLImageElement[]> => {
  const loads = QUESTIONS.map(
    (q) =>
      new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();

        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = q.src;
      })
  );

  return Promise.all(loads);
};
