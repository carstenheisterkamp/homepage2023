import { useEffect } from 'react'
import { useAudioAllowed, useSetAudioAllowed } from '../../stores/audioStore'
import ButtonTemplate from './ButtonTemplate'
import { motion,  useAnimationControls  } from 'framer-motion'

const MuteButton = () => {
    const audioAllowed = useAudioAllowed()
    const setAudioAllowed = useSetAudioAllowed()
    const controls = useAnimationControls()

    const variants = {
      up:    { d: "M25 7C23.098 4 21.1765 1 19 1C14.6471 1 11.3529 13 7 13C4.82353 13 2.91176 10 1 7" },
      down:  { d: "M25 7C23.098 10 21.1765 13 19 13C14.6471 13 11.3529 1 7 1C4.82353 1 2.91176 4 1 7" },
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
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
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
              duration: 1.3,
              delay: 0.5,
              ease: "easeInOut",
            }}
        />
          <motion.path
            className="stroke-black03 dark:stroke-white03"
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
