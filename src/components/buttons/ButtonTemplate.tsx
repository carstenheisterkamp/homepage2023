import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
    children?: ReactNode
    handleClick: () => void
    handleHover: () => void
}
const ButtonTemplate = ({ children, ...props }: Props) => {

  return (
    <motion.button 
      className='w-full h-full bg-transparent border-none'
      type='button'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{duration: 0.3}}
      onClick={props.handleClick}
      onHoverStart={props.handleHover}
    >
        {children}
    </motion.button>
  );
};

export default ButtonTemplate