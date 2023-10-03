import{ useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ThemeButton = () => {
  const [isAnimating, setAnimating] = useState(false);
  const controls = useAnimation();

  const startAnimation = () => {
    setAnimating(true);
    controls.start({ d: 'M50 10 A40 40 0 1 1 50 90 A40 40 0 1 1 50 10' }); // Moon shape path
  };

  const stopAnimation = () => {
    setAnimating(false);
    controls.start({ d: 'M50 50 m-40 0a40 40 0 1 0 80 0a40 40 0 1 0-80 0' }); // Circle path
  };

  return (
    <div>
      <motion.button whileTap={{ scale: 0.9 }} onClick={isAnimating ? stopAnimation : startAnimation}>
        {isAnimating ? 'Stop Animation' : 'Start Animation'}
      </motion.button>

      <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M50 50 m-40 0a40 40 0 1 0 80 0a40 40 0 1 0-80 0"
          stroke="black"
          fill="transparent"
          strokeWidth="3"
          initial={false}
          animate={controls}
        />
      </svg>
    </div>
  );
};

export default ThemeButton;