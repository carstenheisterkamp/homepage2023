import socials from '../data/socials'

export default function SocialLinks() {

    const socialLinks = socials
        .map(({name, url, icon}) => {
        return <div className='w-12 h-12' key={url}><a href={url} target='_blank'>{name}</a><img src={icon}></img></div>
    })
    
    return (
        <div className="w-full">
        { socialLinks }
        </div>
    )
}