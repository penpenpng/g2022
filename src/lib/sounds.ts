const DUMMY_AUDIO = new Audio();

export type Sounds = "mokugyo" | "ok" | "ng" | "break" | "bgm";

export interface AudioAsset {
  src: string;
  audio: HTMLAudioElement;
  volume: number;
}

export const sounds: Record<Sounds, AudioAsset> = {
  mokugyo: {
    src: require("../assets/mp3/poku.mp3"),
    audio: DUMMY_AUDIO,
    volume: 1,
  },
  ok: {
    src: require("../assets/mp3/ok.mp3"),
    audio: DUMMY_AUDIO,
    volume: 1,
  },
  ng: {
    src: require("../assets/mp3/ng.mp3"),
    audio: DUMMY_AUDIO,
    volume: 1,
  },
  break: {
    src: require("../assets/mp3/break.mp3"),
    audio: DUMMY_AUDIO,
    volume: 1,
  },
  bgm: {
    src: require("../assets/mp3/cyber43.mp3"),
    audio: DUMMY_AUDIO,
    volume: 0.07,
  },
};

export const play = (sound: Sounds): void => {
  const { audio, volume } = sounds[sound];

  audio.volume = volume;
  audio.currentTime = 0;
  audio.play();
};

export const pause = (sound: Sounds): void => {
  const { audio } = sounds[sound];

  audio.pause();
  audio.currentTime = 0;
};
