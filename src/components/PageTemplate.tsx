import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useLocation} from 'react-router-dom'
interface Props {
    children?: ReactNode,
    title: string,
    subtitle: string,
    intro: string,
}

export default function PageTemplate({ children, ...props }: Props) {
   const location=useLocation()

   const pageTransition = {
        ease: [0.455, 0.03, 0.515, 0.955], 
        duration: 0.5
    }

    const pageSlide = {
        initial: { opacity: 0, y:10 },
        enter: {opacity: 1, y: 0 },
        exit: {opacity: 0, y: (-10) }
    } 

    return(
        <>
            <motion.div
                className='py-40 px-12'
                key={location.key}
                variants={pageSlide}
                initial={"initial"}
                animate={"enter"}
                exit={"exit"}
                transition={pageTransition}
            >
                <h1 className='text-xl mb-4'>{props.title}</h1>    
                <h2 className="text-xl mb-2">{props.subtitle}</h2>
                <h3 className="text-xl mb-8">{props.intro}</h3>         
                    {children}
            </motion.div> 
        </>
    )
}