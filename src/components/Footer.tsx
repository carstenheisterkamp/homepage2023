import { motion } from 'framer-motion';
import NavItem from './NavItem'
import routes from '../data/routes'

export default function Footer() {
  
  const footerRoutes = routes
    .filter((entry)=>entry.location==='footer')
    .map(({name, path}, key) => {
    path = path!.replace(/^\//, '')
    return <NavItem class='text-s px-2' target={path} name={name!} key={key}/>
  })
    return (
        <footer>
          <motion.div className="fixed right-0 bottom-0 p-5 z-10">
              { footerRoutes } 
          </motion.div>
        </footer>
    )
  }