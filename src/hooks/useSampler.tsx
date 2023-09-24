import { useState, useEffect } from 'react';
import { Sampler } from 'tone';

export const useSynth = (options: never) => {
	const [sampler, setSampler] = useState(null)

  useEffect(() => {
    const sampleplayer = new Sampler(
  
    ).toDestination()

    setSampler(sampleplayer)

    return () => {
			if (sampleplayer) {
				sampleplayer.releaseAll()
				setSampler(null)
			}
		}

  }, [options])
  
	return sampler;
};



