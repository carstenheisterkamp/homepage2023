import { useAudioAllowed, useToggleAudioAllowed } from '../../stores/audioStore'
import ButtonTemplate from './ButtonTemplate'
import { motion } from 'framer-motion'

const MuteButton = () => {
  const audioAllowed = useAudioAllowed()  
  const toggleAudio = useToggleAudioAllowed()

  const variantsLeft = {
    minimized: {d: "M 20, 25 L 20, 23"},
    maximized: {d: "M 20, 34 L 20, 14"}
  }

  const variantsCenter = {
    minimized: {d: "M 24, 25 L 24, 23"},
    maximized: {d: "M 24, 34 L 24, 14"}
  }

  const variantsRight = {
    minimized: {d: "M 28, 25 L 28, 23"},
    maximized: {d: "M 28, 34 L 28, 14"}
  }

  const randomizedTransistion = () => {
    return {
        duration: 1 + Math.random() * 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
        repeatDelay: 0}
  }

  return (
    <ButtonTemplate
      handleClick={()=>{toggleAudio()}}
      handleHover={() => {}}
    > 
      <motion.svg
      className='stroke-black stroke-1 fill-none dark:stroke-white' 
      width="48" height="48" viewBox="0 0 48 48" 
      xmlns="http://www.w3.org/2000/svg"
      initial='minimized'
      animate={audioAllowed ? 'maximized' : 'minimized'}
      >
        <motion.path
          variants={variantsLeft}
          transition = {randomizedTransistion()}
        />
        <motion.path
          variants={variantsCenter}
          transition = {randomizedTransistion()}
          />
        <motion.path
          variants={variantsRight}
          transition = {randomizedTransistion()}
          />
      </motion.svg>
    </ButtonTemplate> 
    )
}
export default MuteButton
