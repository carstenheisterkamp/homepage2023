import ButtonTemplate from './ButtonTemplate';
import {useSetTheme} from '../../stores/uiStore'
// import  useAudioStore from '../../stores/audioStore'
import { motion} from 'framer-motion'


const ThemeButton = () => {

  const setTheme = useSetTheme()

  return (
    <ButtonTemplate 
      handleClick={()=>{
        setTheme()
      }}
     handleHover={()=>console.log('OVER')}
    >
      <svg className='
        stroke-black 
        dark:stroke-white
        b-red
        ' 
        width="48" 
        height="48" 
        viewBox="0 0 48 48" 
        strokeWidth={'1px'} fill='none' 
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path>
          THEME
        </motion.path>
      </svg>

    </ButtonTemplate>
  );
};

export default ThemeButton