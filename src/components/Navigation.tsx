import { motion } from 'framer-motion'
import routes from '../data/routes'
import NavItem from './NavItem'
import MenuButton from './buttons/NavButton'
import { useNav } from '../stores/uiStore'

const Navigation = () => {
  const navActive = useNav()

  const navTransition = { 
    ease: [0.455, 0.03, 0.515, 0.955],
    duration: 0.9
  }

  const navSlide = {
    visible: { opacity: 1},
    hidden: { opacity: 0},
  }

  const mainRoutes = routes
    .filter((entry)=>  entry.location==='main')
    .map(({name, path}, key) => {
    path = path!.replace(/^\//, '')
    return <NavItem target={path} name={name!} style='text-2xl py-1 w-full opacity-1' key={key} i={key}/>
  })

  return (
    <>
      <div className='fixed top-4 right-4 w-12 h-12 z-50'>
        <MenuButton />
      </div>

      <motion.div 
        variants={navSlide}
        initial={navActive} 
        animate={navActive ? 'visible' : 'hidden'}
        transition={navTransition}
        key='nav'
        className='fixed top-0 right-0 px-8 w-full sm:w-96 h-full backdrop-blur-lg z-20'
      >
        <header className='pt-48'>
          <nav className=''>
            <ul>
              { mainRoutes }
            </ul>
          </nav>
        </header>
      </motion.div>
    </> 
  )
}

export default Navigation