import { NavLink } from 'react-router-dom'
/* import { itemSlide, transition } from '../data/animations' */
import { motion } from 'framer-motion'

interface INavItemProps {
    target: string
    name: string
    style: string,
    i: number
}
// <motion.div variants={scale} animate={isActive ? "open" : "closed"} className={styles.indicator}></motion.div>

const NavItem = ( props: INavItemProps) => {
    console.log(props.i)

    return(
        <motion.li
            className={props.style}
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
