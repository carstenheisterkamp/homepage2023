import ThemeButton from './buttons/ThemeButton'
import MuteButton from './buttons/MuteButton'
import FullscreenButton from './buttons/FullscreenButton'

const ToolBar = () => {
    return (
        <div className='fixed bottom-32 right-10 flex flex-col z-50 bg-slate-500'> 
            <div className='w-12 h-12'>
                <ThemeButton />
            </div>
            <div className='w-12 h-12'>
                <MuteButton />
            </div>    
            <div className='w-12 h-12'>
                <FullscreenButton />
            </div>  
        </div>
    )
}

export default ToolBar