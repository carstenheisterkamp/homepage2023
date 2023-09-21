import { motion } from 'framer-motion';
import NavItem from './NavItem'
import routes from '../utils/routes'

export default function Footer() {
  
  const footerRoutes = routes
    .filter((entry)=>entry.location==='footer')
    .map(({name, path}, key) => {
    path = path!.replace(/^\//, '')
    return <NavItem target={path} name={name!} key={key}/>
  })
    return (
        <footer>
          <motion.div>
            <div className="pointer-events-auto z-2 fixed right-10 bottom-[20vh]">
              { footerRoutes } 
            </div>
          </motion.div>
        </footer>
    )
  }