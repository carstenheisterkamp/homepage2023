import { motion } from 'framer-motion'
import { useUIStore } from '../stores/uiStore'
import routes from '../data/routes'
import { navSlide, navTransition, glitchTransition } from '../data/animations'
import NavItem from './NavItem'
import MenuButton from './buttons/NavButton'
import ThemeButton from './buttons/ThemeButton'
import MuteButton from './buttons/MuteButton'


export default function Navigation() {
  const uiStore = useUIStore()
  const navActive = uiStore.navActive
  const steps: number[] = [0.3, 0.5, 0.2, 0.6, 0]
  const stepsrev: number[] = steps.reverse()

  console.log(navActive)

  const mainRoutes = routes
    .filter((entry)=>  entry.location==='main')
    .map(({name, path}, key) => {
    path = path!.replace(/^\//, '')
    return <NavItem target={path} name={name!} style='text-xl p-1 w-full origin-top-left' key={key} i={key}/>
  })

  const footerRoutes = routes
    .filter((entry)=>entry.location==='footer')
    .map(({name, path}, key) => {
    path = path!.replace(/^\//, '')
    return <NavItem style='text-xs leading-7' target={path} name={name!} key={key} i={key}/>
  })

    return (
      <>
        <div className='fixed top-8 right-10 w-12 h-12 z-50'>
          <MenuButton />
        </div>
        <div className='fixed bottom-32 right-10 w-12 h-12 z-50'>
          <ThemeButton />
        </div>
        <div className='fixed bottom-64 right-10 w-12 h-12 z-50'>
          <MuteButton />
        </div>
          <motion.div 
            variants={navSlide}
            initial={navActive} 
            animate={navActive ? 'visible' : 'hidden'}
            transition={navTransition}
            key='nav'
            className='fixed top-0 right-0 px-8 pb-16 w-96 h-full leading-10 backdrop-blur-md z-20'
          >
            <header className='pt-24'>
              <nav className='flex flex-col'>
                <ul>
                  { mainRoutes }
                </ul>
              </nav>
            </header>
            
            <footer className='absolute bottom-8 left-20'>
              <nav>
              <ul>
              { footerRoutes } 
              </ul>
              </nav>
            </footer>
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