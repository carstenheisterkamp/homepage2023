import { siteSettings } from '../data/content'

const BrandingBar = () => {
    const title = siteSettings.title
    return(
        <div className='fixed left-0 top-0 w-20 h-full backdrop-blur-md z-20'>
            <div className='absolute -rotate-90 w-96 h-auto bottom-0 left-4 text-4xl origin-top-left'>{ title }</div>
        </div>
    )
}

export default BrandingBar