import { create } from 'zustand'
import { Sampler } from 'tone';

interface AudioStore {
  sampler: Sampler | null
  playSample: (url: string, pitch: number, volume: number, duration: number | undefined) => void   
}

const useAudioStore = create<AudioStore>((set) => ({
  sampler: null,
  isLoading: false,

  loadSample: async (url) => {
    set({ isLoading: true })
    const sampler = new Sampler({ [url]: url }).toDestination()
    await sampler.load(url)
    set({ sampler, isLoading: false })
  },

  playSample: (url, pitch = 0, volume = 0, duration = undefined) => {
    if (sampler) {
      sampler.triggerAttackRelease(url, duration, undefined, volume, pitch)
    }
  },
}));

export default useAudioStore;
