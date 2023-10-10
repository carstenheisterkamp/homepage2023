import ButtonTemplate from './ButtonTemplate'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const FullscreenButton = () => {

  const [fs, setFS] = useState(false)

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }

  const handleFullscreenChange = () => {
    if(document.fullscreenElement !== null) {
      setFS(true)
    } else {
      console.log("I am not in fullscreen")
      setFS(false)
    }
  }

  useEffect(() => {    
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }})

  const path01Variants = {
    max: { d: "M29 18L35 18L35 24" },
    min: { d: "M34 22L28 22L28 16" }
  }

  const path02Variants = {
    max: { d: "M19 29L13 29L13 23" },
    min: { d: "M14 25L20 25L20 31" }
  }


    return (
      <ButtonTemplate
        handleClick={() => {
          toggleFullScreen()
        }}
        
        handleHover={() => {}}
      >
        <svg viewBox="0 0 48 48" strokeWidth={'2px'} xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            className="stroke-black dark:stroke-white fill-none" 
            variants={path01Variants}
            animate={fs ? "min" : "max"}
          />
          <motion.path 
            className="stroke-black dark:stroke-white fill-none"
            variants={path02Variants}
            animate={fs ? "min" : "max"}
          />
        </svg> 
      </ButtonTemplate>
    )
}
export default FullscreenButton
