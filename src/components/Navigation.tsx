import { motion } from 'framer-motion'
import routes from '../data/routes'
import { navSlide, navTransition, glitchTransition } from '../data/animations'
import NavItem from './NavItem'
import MenuButton from './buttons/NavButton'
import { useNav } from '../stores/uiStore'

const Navigation = () => {
  const navActive = useNav()
  const steps: number[] = [0, 0.3, 0.5, 0.2, 0.6, 0]
  const stepsrev: number[] = steps.reverse()

  const mainRoutes = routes
    .filter((entry)=>  entry.location==='main')
    .map(({name, path}, key) => {
    path = path!.replace(/^\//, '')
    return <NavItem target={path} name={name!} style='text-xl py-1 w-full origin-top-left' key={key} i={key}/>
  })

    return (
      <>
        <div className='fixed top-6 right-[4vw] w-12 h-12 z-50'>
          <MenuButton />
        </div>

        <motion.div 
          variants={navSlide}
          initial={navActive} 
          animate={navActive ? 'visible' : 'hidden'}
          transition={navTransition}
          key='nav'
          className='fixed top-0 right-0 px-8 pb-16 w-1/3 h-full flex flex-row backdrop-blur-md z-20'
        >
          <header className='pt-36'>
            <nav className=''>
              <ul>
                { mainRoutes }
              </ul>
            </nav>
          </header>

          <motion.div
            key="glitch-animation"
            className="bg-black border-none w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference z-[-1] pointer-events-none"
            initial={{ height: '0%', opacity: 0 }}
            animate={navActive ? { height: '100%', opacity: steps } : { height: '0%', opacity: stepsrev }}
            transition={glitchTransition}
          />
        </motion.div>
      </> 
    )
  }

  export default Navigation