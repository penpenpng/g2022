const DUMMY_AUDIO = new Audio();

export type Sounds = "mokugyo";

export interface AudioAsset {
  src: string;
  audio: HTMLAudioElement;
}

export const sounds: Record<Sounds, AudioAsset> = {
  mokugyo: {
    src: require("../assets/mp3/poku.mp3"),
    audio: DUMMY_AUDIO,
  },
};

export const play = (sound: Sounds): void => {
  const a = sounds[sound].audio;

  a.currentTime = 0;
  a.play();
};
