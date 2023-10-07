import { Link } from 'react-router-dom'
import { siteSettings } from '../data/content'

const BrandingBar = () => {
    
    return(
        <div className='fixed left-0 top-0 w-full h-24 z-20'>
            <Link to='/'>
                <div className='w-full h-full z-40 px-16 py-8 text-2xl'>
                    { siteSettings.title }
                </div>
            </Link>
        </div>
    )
}

export default BrandingBar