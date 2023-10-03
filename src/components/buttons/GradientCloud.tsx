import { motion } from "framer-motion";

interface IGradientBackgroundProps {
    style: string
}

export default function GradientCloud(props: IGradientBackgroundProps) {
    return (<motion.div
    className= {props.style + ' ' + 'absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-500  via-purple-500 to-pink-50 hover:to-black blur-lg overflow-visible z-[-1] pointer-events-auto'}
    animate={{ rotate: 360 }}
    transition={{ ease: "linear", duration: 16, repeat: Infinity }}
    >
    </motion.div>)
} 
