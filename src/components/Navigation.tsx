import { motion } from 'framer-motion'
import NavItem from './NavItem'
import routes from '../data/routes'
import { menuSlide, navTransition } from '../data/animations'
import MenuButton from './buttons/NavButton'
import { useUIStore } from '../hooks/uiStore'


export default function Navigation() {
  const uiStore = useUIStore()
  const navActive = uiStore.navActive

  const mainRoutes = routes
    .filter((entry)=>  entry.location==='main')
    .map(({name, path}, key) => {
    path = path!.replace(/^\//, '')
    return <NavItem target={path} name={name!} style='text-3xl p-1 w-full origin-top-left' key={key} i={key}/>
  })

  const footerRoutes = routes
    .filter((entry)=>entry.location==='footer')
    .map(({name, path}, key) => {
    path = path!.replace(/^\//, '')
    return <NavItem style='text-s leading-7' target={path} name={name!} key={key} i={key}/>
  })

    return (
      <>
        <div className='fixed top-3 right-3 w-14 h-14 z-50'>
          <MenuButton />
        </div>

        <motion.div 
          variants={menuSlide}
          initial={navActive} 
          animate={navActive ? 'visible' : 'hidden'}
          transition={navTransition}
          className='fixed top-0 px-8 pb-16 w-96 h-full leading-10 backdrop-blur-md z-20'
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
        </motion.div>
      </> 
    )
  }