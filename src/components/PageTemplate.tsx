import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useLocation} from 'react-router-dom'

interface Props {
    children?: ReactNode,
    title: string,
}

export default function PageTemplate({ children, ...props }: Props) {
   const location=useLocation()

    return(
        <motion.div
            className='p-10'
            key={location.key}
            initial={{ opacity: 0, x:(-10) }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x:10 }}
            transition={{duration: 1}}
        >
            <h1 className='text-8xl mb-8'>{props.title}</h1>    
            {children}
        </motion.div>     
    )
}