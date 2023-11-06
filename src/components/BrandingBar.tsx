import { Link } from 'react-router-dom'
import { siteSettings } from '../data/siteConfig'
import { useScramble } from '../hooks/scramble'

const BrandingBar = () => {

    const { ref, replay } = useScramble({ 
        text: siteSettings.title,
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
                onPointerDown={replay}
                onClick={ (event) => event.preventDefault()}
            >
            </Link>
        </div>
    )
}

export default BrandingBar

