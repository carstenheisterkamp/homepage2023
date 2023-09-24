import socials from '../data/socials'

export default function SocialLinks() {

    const socialLinks = socials
        .map(({url, short}) => {
        return <div className='flex flex-row items-center justify-center w-8 h-8' key={url}><a href={url} target='_blank'>{short}</a></div>
    })
    
    return (
        <div className='grid grid-cols-3'>
        { socialLinks }
        </div>
    )
}