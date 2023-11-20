import { Link } from 'react-router-dom'
import { siteSettings } from '../data/siteConfig'
import { useScramble } from '../hooks/scramble'
import { useIsTouchDevice } from '../stores/uiStore'

const BrandingBar = () => {
    const isMobile = useIsTouchDevice();

    const { ref, replay } = useScramble({ 
        text: isMobile ? 'CH' : siteSettings.title,
        step: 1,
        overdrive: 42,
      })
    
    return(
        <div className='fixed left-8 top-7 w-88 h-8 z-50'>
            <Link 
                className='text-xl pointer-events-auto'
                to='/'
                ref={ref}
                onMouseEnter={replay}
                onClick={ ()=> isMobile ? replay : ''}
            >
            </Link>
        </div>
    )
}

export default BrandingBar

