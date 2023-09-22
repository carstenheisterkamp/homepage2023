import { ReactNode } from "react"
import { motion } from "framer-motion";

interface Props {
    children?: ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>

}

export default function ButtonTemplate({children, onClick }: Props) {
    return (
      <motion.button 
        type='button' 
        onClick={onClick} 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='w-full h-full bg-transparent border-none cursor-pointer'>
        {children}
      </motion.button>
    )
  }