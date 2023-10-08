import { create } from "zustand"
import { devtools, persist } from 'zustand/middleware'
import { Sampler } from "tone"
import { audioAssets } from "../data/siteConfig"

interface AudioStore{
  audioAllowed: boolean,
  basURL: string
  samples: object
  isLoaded: boolean
  stereoPanorama: number
  volume: number
  samplePlayer: Sampler | null
  setAudioAllowed: () => void
/*   setIsLoaded: () => void | null
  loadSample: () => void | null */
}

const useAudioStore = create<AudioStore>()(
  devtools(
  persist(
    (set, get) => ({
      audioAllowed: false,
      samples: audioAssets.samples,
      basURL: audioAssets.baseUrl,
      isLoaded: false,
      stereoPanorama: 0.5,
      volume: 1.0,
      samplePlayer:null,
      setAudioAllowed: () => set((state) => ({
        ...state,
        audioAllowed: get().audioAllowed ? false : true
      }))
      }),{
      name: 'sampler,'
    }
  )))
  
  export const useAudioAllowed = () => useAudioStore((state) => state.audioAllowed)
  export const useSetAudioAllowed = () => useAudioStore((state) => state.setAudioAllowed)



/*
  startSample: () => {
    if (!set.getState().samplePlayer) {
      throw new Error("Sample not loaded");
    }
    set.getState().samplePlayer.start();
  },

  stopSample: () => {
    if (!set.getState().samplePlayer) {
      throw new Error("Sample not loaded");
    }
    set.getState().samplePlayer.stop();
  },

  setStereoPanorama: (stereoPanorama: number) => {
    if (!set.getState().samplePlayer) {
      throw new Error("Sample not loaded");
    }
    set.getState().samplePlayer.setStereoPanorama(stereoPanorama);
    set({ stereoPanorama });
  },

  setVolume: (volume: number) => {
    if (!set.getState().samplePlayer) {
      throw new Error("Sample not loaded");
    }
    set.getState().samplePlayer.setVolume(volume);
    set({ volume });
  },
})); */