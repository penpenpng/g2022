import { sounds, AudioAsset, Sounds } from "./sounds";
import { QUESTIONS } from "./questions";

const UI_IMAGES = [
  require("../assets/ui/mokugyo.png"),
  require("../assets/ui/tora.png"),
];

const loadImage = (src: string): Promise<void> =>
  new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });

const loadAudio = (asset: AudioAsset): Promise<void> =>
  new Promise((resolve, reject) => {
    const audio = new Audio(asset.src);

    audio.onloadedmetadata = () => resolve();
    audio.onerror = reject;

    asset.audio = audio;
  });

export const preload = (): Promise<unknown> => {
  return Promise.all([
    ...QUESTIONS.map((q) => loadImage(q.src)),
    ...UI_IMAGES.map(loadImage),
    ...Object.values(sounds).map(loadAudio),
  ]);
};
