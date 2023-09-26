import {motion} from 'framer-motion'
import { useUIStore } from '../../hooks/uiStore';

const MenuButton = () => {
    const uiStore = useUIStore()
    const navActive = uiStore.navActive

    const path01Variants = {
        visible: { d: "M15 33 L 33 15" },
        hidden: { d: "M 10 22 L 38 22" }
      }

    const path02Variants = {
        visible: { d: "M 15 15 L 33 33  " },
        hidden: { d: "M10 28 L 39 28" }
      }

    return (
        <motion.button 
            type='button' 
            onClick={() => uiStore.toggleNav()} 
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{duration: 0.5}}
            className='w-full h-full bg-transparent border-none cursor-pointer pointer-events-auto'>
                <motion.svg className='stroke-black dark:stroke-white' width="48" height="48" viewBox="0 0 48 48" strokeWidth={'1px'} fill='none' xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                        animate={navActive ? "visible" : "hidden"}
                        variants={path01Variants}
                    />
                    <motion.path
                        animate={navActive ? "visible" : "hidden"}
                        variants={path02Variants}
                    />
                </motion.svg>
      </motion.button>

    )
}

export default MenuButton