import { motion, AnimatePresence } from 'framer-motion'

const GlitchAnimation = () => {
  const steps: number[] = [0.3, 0.5, 0.2, 0.6, 0]

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key="glitch-animation"
        className="bg-black border-none w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference z-0 pointer-events-none"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: '100%', opacity: steps }}
        transition={{
          duration: 0.5,
          times: [0, 0.1, 0.2, 0.3, 0.4, 1],
          easings: [
            0.42, 0, 0.9, 0,
            0.42, 0, 0.9, 0,
            0.42, 0, 0.9, 0,
            0.42, 0, 0.9, 0,
            0.42, 0, 0.9, 0,
            0.42, 0, 0.9, 0,
          ],
        }}
      />
    </AnimatePresence>
  )
}

export default GlitchAnimation;
