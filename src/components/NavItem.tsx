import { NavLink } from 'react-router-dom'
import { navItemSlide,  navItemTransiton} from '../data/animations'
import { motion } from 'framer-motion'
import { useNav } from '../stores/uiStore'
import { useScramble } from '../hooks/scramble'

interface Props {
    target: string
    name: string
    style: string,
    i: number
}

const NavItem = ( props: Props) => {
    const navActive = useNav()

    const { ref, replay } = useScramble({ 
        text: props.name,
        step: 1,
        speed: 0.3,
        tick: 1,
        overdrive: 42
      });

    return(
        <motion.li
            className={props.style}
            variants={navItemSlide }
            initial='hidden'
            animate={navActive ? 'visible' : 'hidden'}
            transition={navItemTransiton(props.i)}
            onAnimationStart={replay}
            onPointerEnter={replay}
            onPointerDown={replay}   
        >
            <NavLink 
                to={props.target}
                preventScrollReset={true}
                ref={ref}
            />
        </motion.li>
    )
}

export default NavItem

