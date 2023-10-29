import { Link } from 'react-router-dom'
import { siteSettings } from '../data/siteConfig'
import { useScramble } from '../hooks/scramble';

const BrandingBar = () => {
    const { ref, replay } = useScramble({ 
        text: siteSettings.title,
        step: 1,
        overdrive: 42,
      })

    return(
        <div className='fixed left-0 top-0 w-full h-24 z-20'>
            <div className='w-[400] h-full z-40 px-16 py-8 text-xl'>
                <Link 
                    to='/'
                    ref={ref}
                    onMouseEnter={replay}
                    onPointerDown={replay}
                >
              {}
                </Link>
            </div>
        </div>
    )
}

export default BrandingBar

