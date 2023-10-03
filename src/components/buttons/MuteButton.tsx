import { motion } from 'framer-motion'
import { useUIStore }from '../../stores/uiStore'
import useAudiostore  from '../../stores/audioStore'

const  MuteButton = () => {
  const uiStore = useUIStore()
  const audioStore = useAudiostore() 
  const audioMuted = uiStore.audioMuted
 

    return (
      <button
        type='button' 
        className='w-full h-full bg-transparent border-none cursor-pointer pointer-events-auto'
        onClick={() => {
          uiStore.toggleAudioMuted()
          if(!audioMuted) audioStore.playSample()
        }} 
        onMouseEnter={() =>{
          if(!audioMuted) audioStore.playSample()
        }}
      >
        <motion.svg viewBox="0 0 48 48"  xmlns="http://www.w3.org/2000/svg" stroke='white' fill='transparent'>
          <motion.path
            d="M0 48 Q 50 20, 100 48 T 200 48 T 300 48"
            animate={{ d: audioMuted ?'M0 48 Q 50 68, 100 48 T 200 28 T 300 48' : 'M0 48 Q 50 20, 100 48 T 200 48 T 300 48' }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }}
          />
        </motion.svg>
        
      </button>
    )
}

export default MuteButton
