import ThemeButton from './buttons/ThemeButton'
import MuteButton from './buttons/MuteButton'
import FullscreenButton from './buttons/FullscreenButton'
import { useIsTouchDevice } from '../stores/uiStore'
 

const ToolBar = () => {
    const isToucheDevice = useIsTouchDevice()
    
    return (
        <div className='fixed bottom-4 right-4   backdrop-blur-md flex flex-col z-50'> 
            <div className='w-12 h-12'>
                <ThemeButton />
            </div>
            <div className='w-12 h-12'>
                <MuteButton />
            </div>    
            { isToucheDevice ? '' :
                (<div className='w-12 h-12'>
                    { isToucheDevice ? '' : <FullscreenButton /> }
                </div>  ) 
            }
        </div>
    )
}

export default ToolBar
