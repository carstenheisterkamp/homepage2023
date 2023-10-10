import ButtonTemplate from './ButtonTemplate'
import { toggleFullScreen } from '../../data/utilities'
import { motion } from 'framer-motion'


const FullscreenButton = () => {
    return (
      <ButtonTemplate
        handleClick={() => {
          toggleFullScreen()
        }}
        
        handleHover={() => {}}
      >
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" stroke='white' fill='transparent'>
          <motion.path/>
        </svg> 
      </ButtonTemplate>
    )
}
export default FullscreenButton