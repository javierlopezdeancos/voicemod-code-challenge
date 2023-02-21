import { defineStore } from "pinia";
import type { VoiceViewType } from "@/voice/types/voiceViewType";
import type { VoiceTagEnum } from "../enums/voiceTagEnum";

const sortVoicesAsc = (a: VoiceViewType, b: VoiceViewType): number => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }

  return 0;
};

const sortVoicesDesc = (a: VoiceViewType, b: VoiceViewType): number => {
  if (a.name < b.name) {
    return 1;
  }
  if (a.name > b.name) {
    return -1;
  }

  return 0;
};

export const useVoicesStore = defineStore("voices", {
  state: () => ({ voices: [] as VoiceViewType[] }),
  getters: {
    sortVoicesAsc(state) {
      return () => {
        return [...state.voices].sort(sortVoicesAsc);
      };
    },
    sortVoicesDesc(state) {
      return () => {
        return [...state.voices].sort(sortVoicesDesc);
      };
    },
    filterBy(state) {
      return (tag: VoiceTagEnum) => {
        return [...state.voices].filter((voice) => voice.tags.includes(tag));
      };
    },
    randomVoice(state) {
      return () => {
        const v = [...state.voices];
        return v[Math.floor(Math.random() * v.length)];
      };
    },
  },
  actions: {
    setVoices(voices: VoiceViewType[]) {
      this.voices = voices;
    },
  },
});
