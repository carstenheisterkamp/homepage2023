import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useNav, useIsTouchDevice } from '../stores/uiStore'
import { useScramble } from '../hooks/scramble'


interface Props {
    target: string
    name: string
    style: string,
    i: number
}

const NavItem = ( props: Props) => {
    const navActive = useNav()
    const location = useLocation()
    const isActve =  location.pathname.includes(props.name.toLowerCase()) || location.pathname === '/' && props.name === 'Home'
    const isMobile = useIsTouchDevice()

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
      })
    
    if(isActve) {

        return(
            <motion.li
            className={props.style }
            variants={navItemSlide }
            initial='hidden'
            animate={navActive ? 'visible' : 'hidden'}
            transition={navItemTransiton(props.i)}
            onAnimationStart={()=>{setTimeout(replay,100 + props.i*50)}}
            onPointerEnter={replay}
            onClick={()=> isMobile ? replay : ''}
        >
            <div className='uppercase pointer-events-auto' onClick={() => {console.log("click")}} ref={ref}></div>
        </motion.li>
        )} else {
            return(
                <motion.li
                    className={props.style }
                    variants={navItemSlide }
                    initial='hidden'
                    animate={navActive ? 'visible' : 'hidden'}
                    transition={navItemTransiton(props.i)}
                    onAnimationStart={()=>{setTimeout(replay,100 + props.i*50)}}
                    onPointerEnter={replay}
                    onClick={()=> isMobile ? replay : ''}
                >   
                    <NavLink 
                        to={ props.target }
                        preventScrollReset={true}
                        ref={ref}
                    ></NavLink> 
                </motion.li>
            )
    }
}

export default NavItem