import ButtonTemplate from './ButtonTemplate'
import {useSetTheme, useTheme} from '../../stores/uiStore'
import { motion} from 'framer-motion'

const ThemeButton = () => {

  const setTheme = useSetTheme()
  const theme = useTheme()

  return (
    theme === 'dark' ? 
      <ButtonTemplate 
      handleClick={()=>{
        setTheme()
      }}
    handleHover={()=>{}}
    >
      <motion.svg 
        className="fill-none stroke-1 stroke-black dark:stroke-white" 
        width="48px" height="48px" viewBox="0 0 48 48" 
        version="1.1" xmlns="http://www.w3.org/2000/svg"
      >
      <g>
          <circle cx="24" cy="24" r="4.5"></circle>
          <line x1="23.5" y1="15.5" x2="23.5" y2="17" id="Line-1"></line>
          <line x1="23.5" y1="31" x2="23.5" y2="32.5" id="Line-5"></line>
          <line x1="31.5" y1="23.5" x2="31.5" y2="25" id="Line-1-Copy" transform="translate(31.5, 24.25) rotate(90) translate(-31.5, -24.25)"></line>
          <line x1="15.75" y1="23.25" x2="15.75" y2="24.75" id="Line-5-Copy" transform="translate(15.75, 24.25) rotate(90) translate(-15.75, -24.25)"></line>
          <line x1="29.1568542" y1="17.8431458" x2="29.1568542" y2="19.3431458" id="Line-1" transform="translate(29.1569, 18.5931) rotate(45) translate(-29.1569, -18.5931)"></line>
          <line x1="18.0199224" y1="28.7300776" x2="18.0199224" y2="30.2300776" id="Line-5" transform="translate(18.0199, 29.7301) rotate(45) translate(-18.0199, -29.7301)"></line>
          <line x1="29.1568542" y1="29.1568542" x2="29.1568542" y2="30.6568542" id="Line-1-Copy" transform="translate(29.1569, 29.9069) rotate(135) translate(-29.1569, -29.9069)"></line>
          <line x1="18.0199224" y1="17.7699224" x2="18.0199224" y2="19.2699224" id="Line-5-Copy" transform="translate(18.0199, 18.7699) rotate(135) translate(-18.0199, -18.7699)"></line>
      </g>
      </motion.svg>
    </ButtonTemplate>
    :
    <ButtonTemplate 
    handleClick={()=>{
      setTheme()
    }}
    handleHover={()=>{}}
    >
      <svg className='fill-none stroke-1 stroke-black dark:stroke-white' 
        width="48px" height="48px" viewBox="0 0 48 48" 
        version="1.1" xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M27.0712955,17.3271478 C28.2092969,17.7397911 29.2087703,18.4932512 29.9684457,19.4707553 C30.9232335,20.699318 31.5,22.2824624 31.5,24 C31.5,26.0710678 30.6605339,27.9460678 29.3033009,29.3033009 C27.9460678,30.6605339 26.0710678,31.5 24,31.5 C22.5841497,31.5 21.259868,31.1078198 20.1300828,30.4258565 C19.2790022,29.9121255 18.53822,29.2341318 17.9519521,28.4358706 C18.2954122,28.4782375 18.6451653,28.5 19,28.5 C21.3472102,28.5 23.4722102,27.5486051 25.0104076,26.0104076 C26.5486051,24.4722102 27.5,22.3472102 27.5,20 C27.5,19.0661952 27.3493367,18.167587 27.0712955,17.3271478 Z"></path>
      </svg>
  </ButtonTemplate> 
  )
}

export default ThemeButton