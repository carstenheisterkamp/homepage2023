import ButtonTemplate from './ButtonTemplate'
import { toggleFullScreen } from '../../data/utilities'
import { motion } from 'framer-motion'


const FullscreenButton = () => {
    return (
      <ButtonTemplate
        handleClick={() => {
          toggleFullScreen()
          console.log('CLICK')
        }}
        
        handleHover={() => {
          console.log('HOVER')
        }}
      >
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" stroke='white' fill='transparent'>
          <motion.path
            d="M0 48 Q 50 20, 100 48 T 200 48 T 300 48"
           /*  animate={{ d: audioMuted ? 'M0 24 Q 50 48, 100 48 T 200 28 T 300 24' : 'M0 48 Q 50 20, 100 48 T 200 48 T 300 48' }} */
            transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }}
          />
        </svg> 
      </ButtonTemplate>
    )
}
export default FullscreenButton