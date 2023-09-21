import { motion } from 'framer-motion';
import NavItem from './NavItem'
import MenuButton from './buttons/MenuButton';
import routes from '../data/routes'

export default function Header() {
  
  const mainRoutes = routes
    .filter((entry)=>  entry.location==='main')
    .map(({name, path}, key) => {
    path = path!.replace(/^\//, '')
    return <NavItem target={path} name={name!} key={key}/>
    
  })
    return (
        <header>
          <div className='w-full flex flex-row items-center justify-center h-12 hover:backdrop-blur-md pointer-events-auto'>
            <MenuButton />
          </div>
          <motion.div className='z-100'>
            <nav className='pointer-events-auto'>
              { mainRoutes }
            </nav>
          </motion.div>
        </header>
    )
  }