import { motion } from 'framer-motion'
import routes from '../data/routes'
import { navSlide, navTransition} from '../data/animations'
import NavItem from './NavItem'
import MenuButton from './buttons/NavButton'
import { useNav } from '../stores/uiStore'

const Navigation = () => {
  const navActive = useNav()

  const mainRoutes = routes
    .filter((entry)=>  entry.location==='main')
    .map(({name, path}, key) => {
    path = path!.replace(/^\//, '')
    return <NavItem target={path} name={name!} style='text-xl py-1 w-full opacity-1' key={key} i={key}/>
  })

    return (
      <>
        <div className='fixed top-6 right-[2vw] w-12 h-12 z-50'>
          <MenuButton />
        </div>

        <motion.div 
          variants={navSlide}
          initial={navActive} 
          animate={navActive ? 'visible' : 'hidden'}
          transition={navTransition}
          key='nav'
          className='fixed top-0 right-0 px-8 w-1/5 h-52 backdrop-blur-md z-20'
        >
          <header className='pt-8'>
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