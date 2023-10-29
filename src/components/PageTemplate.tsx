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