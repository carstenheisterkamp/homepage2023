import { useState } from 'react';
import * as Tone from 'tone';

interface AudioStore {
  sampleLoaded: boolean;
  loadSample: (samplePath: string) => Promise<void>;
  playSample: () => void;
  stopSample: () => void;
  setVolume: (volume: number) => void;
  setPan: (pan: number) => void;
}

const useAudioStore = (): AudioStore => {
  const [sampleLoaded, setSampleLoaded] = useState(false);
  const player = new Tone.Player().toDestination();

  const loadSample = async (samplePath: string) => {
    try {
      await player.load(samplePath);
      setSampleLoaded(true);
    } catch (error) {
      console.error('Fehler beim Laden des Samples:', error);
    }
  };

  const playSample = () => {
    if (sampleLoaded) {
      player.start();
    } else {
      console.warn('Sample wurde nicht geladen.');
    }
  };

  const stopSample = () => {
    player.stop();
  };

  const setVolume = (volume: number) => {
    player.volume.value = volume;
  };

  const setPan = (pan: number) => {
    player.pan.value = pan;
  };

  return {
    sampleLoaded,
    loadSample,
    playSample,
    stopSample,
    setVolume,
    setPan,
  };
};

export default useAudioStore

