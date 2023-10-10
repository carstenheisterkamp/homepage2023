import { useEffect } from 'react'
import { useAudioAllowed, useSetAudioAllowed } from '../../stores/audioStore'
import ButtonTemplate from './ButtonTemplate'
import { motion,  useAnimationControls  } from 'framer-motion'

const MuteButton = () => {
    const audioAllowed = useAudioAllowed()
    const setAudioAllowed = useSetAudioAllowed()
    const controls = useAnimationControls()

    const variants = {
      up:    { d: "M36 24C34.098 22 32.1765 20 30 20C25.6471 20 22.3529 28 18 28C15.8235 28 13.9118 26 12 24" },
      down:  { d: "M36 24C34.098 26 32.1765 28 30 28C25.6471 28 22.3529 20 18 20C15.8235 20 13.9118 22 12 24" },
    } 

    useEffect(()=>toggleAnimation())

    const toggleAnimation = () => {
      audioAllowed ? controls.start(variants.down) : controls.stop()
    }

    return (
      <ButtonTemplate
        handleClick={() => {
          setAudioAllowed()
          toggleAnimation()
        }}
        
        handleHover={() => {}}
      >
        <svg viewBox="0 0 48 48" strokeWidth={'2px'} xmlns="http://www.w3.org/2000/svg">
          <motion.path
            className="stroke-black dark:stroke-white"
            style={{
                strokeWidth: 1,
                fill: "transparent"
            }}
            initial={variants.up}
            animate={controls}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.3,
              delay: 0.5,
              ease: "easeInOut",
            }}
        />
          <motion.path
            className="stroke-black06 dark:stroke-white06"
            style={{
                strokeWidth: 1,
                fill: "transparent"
            }}
            initial={variants.up}
            animate={controls}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              duration: 2,
              times: [0, 0.16, 0.33, 0.5, 0.66, 0.83]
            }}
        />
        </svg> 
      </ButtonTemplate>
    )
}
export default MuteButton
