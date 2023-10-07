import { motion } from 'framer-motion'
import { useNav, useSetNav } from '../../stores/uiStore'

const MenuButton = () => {
    const navActive = useNav()
    const setNavActive = useSetNav()

    const path01Variants = {
        visible: { d: "M15 33 L 33 15" },
        hidden: { d: "M 10 22 L 38 22" }
      }

    const path02Variants = {
        visible: { d: "M 15 15 L 33 33" },
        hidden: { d: "M10 28 L 39 28" }
      }

    return (
        <motion.button 
            type='button' 
            className='w-full h-full bg-transparent border-none cursor-pointer pointer-events-auto'
            onClick={() => setNavActive()} 
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
            transition={{duration: 0.3}}
        >
                <svg className='stroke-black dark:stroke-white' width="48" height="48" viewBox="0 0 48 48" strokeWidth={'1px'} fill='none' xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                        animate={navActive ? "visible" : "hidden"}
                        variants={path01Variants}
                    />
                    <motion.path
                        animate={navActive ? "visible" : "hidden"}
                        variants={path02Variants}
                    />
                </svg>
        </motion.button>
    )
}

export default MenuButton