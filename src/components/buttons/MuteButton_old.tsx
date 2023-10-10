import { useAudioAllowed, useSetAudioAllowed } from '../../stores/audioStore'
import ButtonTemplate from './ButtonTemplate'
import { motion, useAnimation } from 'framer-motion'

const MuteButton = () => {
    const audioAllowed = useAudioAllowed()
    const setAudioAllowed = useSetAudioAllowed()
    return (
      <ButtonTemplate
        handleClick={() => {
          setAudioAllowed()

        }}
        
        handleHover={() => {
        }}
      >
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <motion.path
                className="stroke-black06 dark:stroke-white06"
                style={{
                    strokeWidth: 1,
                    fill: "transparent"
                }}
                animate={
                    audioAllowed ? {
                    d: [
                      "M37 9C34.1471 5 31.2647 1 28 1C21.4706 1 16.5294 17 10 17C6.7353 17 3.86765 13 1 9",
                      "M25 7C23.098 4 21.1765 1 19 1C14.6471 1 11.3529 13 7 13C4.82353 13 2.91176 10 1 7",
                    ]
                } :
               { 
                    d:  "M37 9C34.1471 5 31.2647 1 28 1C21.4706 1 16.5294 17 10 17C6.7353 17 3.86765 13 1 9"
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    duration: 2.3,
                    times: [0, 0.16, 0.33, 0.5, 0.66, 0.83]
                }}
            />
             <motion.path
                className="stroke-black03 dark:stroke-white03"
                style={{
                    strokeWidth: 1,
                    fill: "transparent"
                }}
                animate={
                    audioAllowed ? {
                    d: [
                      "M37 9C34.1471 5 31.2647 1 28 1C21.4706 1 16.5294 17 10 17C6.7353 17 3.86765 13 1 9",
                      "M37 9C34.1471 13 31.2647 17 28 17C21.4706 17 16.5294 1 10 1C6.7353 1 3.86765 5 1 9",
                    ]
                } :
               { 
                    d:  "M37 9C34.1471 5 31.2647 1 28 1C21.4706 1 16.5294 17 10 17C6.7353 17 3.86765 13 1 9"
                ,}}
                transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    duration: 3.3,
                    delay: 0.1,
                    times: [0, 0.16, 0.33, 0.5, 0.66, 0.83]
                }}
            />
        </svg> 
      </ButtonTemplate>
    )
}
export default MuteButton
