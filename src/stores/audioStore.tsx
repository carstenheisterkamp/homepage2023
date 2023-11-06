import { create } from "zustand"
import { devtools, persist } from 'zustand/middleware'
import { Sampler } from "tone"
import { audioAssets } from "../data/siteConfig"

interface AudioStore{
  audioAllowed: boolean,
  samplePlayer: Sampler | null
  samplerConfig: {
    basURL: string
    samples: object
    isLoaded: boolean
    pan: number
    volume: number
  }, 
  setIsLoaded: () => void | null
  initSampler: () => void | null
  playSampler: () => void
  toggleAudioAllowed: () => void

}

const useAudioStore = create<AudioStore>()(
  devtools(
  persist(
    (set, get) => ({
      audioAllowed: false,
      samplePlayer:null,
      samplerConfig: {
        basURL: audioAssets.baseUrl,
        isLoaded: false,
        samples: audioAssets.samples,
        pan: 0.5,
        volume: 1.0,
      },
      setIsLoaded: () =>{},
      initSampler: () => {},
      playSampler: () => {},
      toggleAudioAllowed: () => set((state) => ({
        ...state,
        audioAllowed: get().audioAllowed ? false : true
      }))
    }),{
      name: 'sampler'
    }
  )))
  
  export const useAudioAllowed = () => useAudioStore((state) => state.audioAllowed)
  export const useToggleAudioAllowed = () => useAudioStore((state) => state.toggleAudioAllowed)

  export const useSampler = () => useAudioStore((state) => state.samplerConfig)