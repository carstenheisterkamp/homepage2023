import { motion } from 'framer-motion';
import NavItem from './NavItem'
import routes from '../utils/routes'

export default function Header() {
  
  const mainRoutes = routes
    .filter((entry)=>  entry.location==='main')
    .map(({name, path}, key) => {
    path = path!.replace(/^\//, '')
    return <NavItem target={path} name={name!} key={key}/>
    
  })
    return (
        <header>
          <motion.div className='z-100'>
            <nav className='pointer-events-auto'>
              { mainRoutes }
            </nav>
          </motion.div>
        </header>
    )
  }