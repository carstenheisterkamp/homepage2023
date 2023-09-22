import { useState } from 'react'
import { motion } from 'framer-motion'
import NavItem from './NavItem'
import MenuButton from './buttons/MenuButton'
import SocialLinks from './SocialLinks'
import routes from '../data/routes'

export default function Navigation() {

  const [isActive, setIsActive] = useState(false)
  
  const mainRoutes = routes
    .filter((entry)=>  entry.location==='main')
    .map(({name, path}, key) => {
    path = path!.replace(/^\//, '')
    return <NavItem target={path} name={name!} class='text-3xl p-1 w-full hover:bg-white_02' key={key}/>
  })

  const footerRoutes = routes
    .filter((entry)=>entry.location==='footer')
    .map(({name, path}, key) => {
    path = path!.replace(/^\//, '')
    return <NavItem class='text-s px-2' target={path} name={name!} key={key}/>
  })

    return (
      <>
        <div className='flex flex-row items-center justify-center h-12 z-50'>
          <MenuButton />
        </div>

        <motion.div 
          className='fixed right-0 top-0 p-8 w-96 h-full leading-10 backdrop-blur-md'>
     
        <header>
          <nav className='flex flex-col items-end'>
            { mainRoutes }
          </nav>
        </header>

        <SocialLinks />
        
        <footer>
          <nav>
          { footerRoutes } 
          </nav>
        </footer>

        </motion.div>
      </> 
    )
  }