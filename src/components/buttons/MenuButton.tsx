import {motion} from 'framer-motion'
import { useState } from 'react';

interface Props {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const MenuButton = ( {onClick} : Props) => {

    const [isClosed, setIsClosed] = useState('closed')

    const  handleClick = function() {
        isClosed === 'closed' ? setIsClosed('open') : setIsClosed('closed')
        onClick()
    }

    const path01Variants = {
        open: { d: "M 15 15 L 33 33  " },
        closed: { d: "M 10 22 L 38 22" }
      }

    const path02Variants = {
        open: { d: "M15 33 L 33 15" },
  /*       moving: { d: "M10 28 L 39 28" }, */
        closed: { d: "M10 28 L 39 28" }
      }

    return (
        <motion.button 
            type='button' 
            onClick={handleClick} 
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{duration: 0.5}}
            className='w-full h-full bg-transparent border-none cursor-pointer pointer-events-auto'>
                <motion.svg className='stroke-black dark:stroke-white' width="48" height="48" viewBox="0 0 48 48" strokeWidth={'2px'} fill='none' xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                    animate={isClosed}
                    variants={path01Variants}
                    />
                    <motion.path
                    animate={isClosed}
                    variants={path02Variants}
                    />
                </motion.svg>
      </motion.button>

    )
}

export default MenuButton