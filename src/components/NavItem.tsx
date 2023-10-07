import { NavLink } from 'react-router-dom'
import { navItemSlide,  navItemTransiton} from '../data/animations'
import { motion } from 'framer-motion'
import { useNav } from '../stores/uiStore'

interface Props {
    target: string
    name: string
    style: string,
    i: number
}

const NavItem = ( props: Props) => {
    const navActive = useNav()

    return(
        <motion.li
            className={props.style}
            variants={navItemSlide }
            initial='hidden'
            animate={navActive ? 'visible' : 'hidden'}
            transition={navItemTransiton(props.i)}
        >
            <NavLink 
                to={props.target}
                preventScrollReset={true}
            >
                {props.name}
            </NavLink>
        </motion.li>
    )
}

export default NavItem

