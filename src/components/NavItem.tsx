import { NavLink } from 'react-router-dom'
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

    const navItemTransiton = (id: number) =>{ 
        return {duration: 0.5, delay: id * 0.05 }
    }

    const navItemSlide = {
        visible: { x: 0 },
        hidden: { x: 20}
    }

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
            onAnimationStart={()=>{setTimeout(replay,100 + props.i*50)}}
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

