import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useLocation} from 'react-router-dom'
import { pageSlide, pageTransition } from '../data/animations'

interface Props {
    children?: ReactNode,
    title: string,
    subtitle: string,
    intro: string,
}

export default function PageTemplate({ children, ...props }: Props) {
   const location=useLocation()

    return(
        <motion.div
            className='py-20 px-40 pointer-events-auto'
            key={location.key}
            variants={pageSlide}
            initial={pageSlide.initial}
            animate={pageSlide.enter}
            exit={pageSlide.exit}
            transition={pageTransition}
        >
            <h1 className='text-8xl mb-8'>{props.title}</h1>    
            <h2 className="text-6xl mb-4">{props.subtitle}</h2>
            <section className="text-4xl">{props.intro}</section>
            {children}
            <div>To Top</div>
        </motion.div>     
    )
}

/*      variants={menuSlide}
          initial={navActive} 
          animate={navActive ? "visible" : "hidden"} */