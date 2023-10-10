import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'


const GlitchAnimation = () => {
  const location = useLocation()  
  const controls = useAnimation()

  useEffect(() => {
    const opacitysteps: number[] = [0, 0.3, 0.1, 0.4, 0]
    const heightsteps: string[] = ['0%','100%']
    controls.start({ 
                      height: heightsteps, 
                      opacity: opacitysteps 
                    })

  }, [location, controls])

  return (
      <motion.div
        key="glitch-animation"
        className="glitch bg-white dark:bg-black border-none w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-multiply z-[-1] pointer-events-none"
        initial={{ height: 0, opacity: 0 }}
        animate={controls}
        transition={{
          duration: 0.4,
          times: [0.1, 0.2, 0.3, 0.4],
          easing: '0.42, 0, 0.9, 0'
        }}
      />
  )
}

export default GlitchAnimation;
