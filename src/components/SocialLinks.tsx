import socials from '../data/socials'
import { useScrollPosition, usePointerPosition } from '../stores/uiStore'

export default function SocialLinks() {

    const pointerPosition = usePointerPosition()
    const scrollPosition = useScrollPosition()

    const socialLinks = socials
        .map(({url, short}) => {
        return <div className='flex flex-row items-center justify-center w-8 h-8' key={url}><a href={url} target='_blank'>{short}</a></div>
    })
    
    return (
        <div>
              <div><p>x: { pointerPosition[0] }, y: { pointerPosition[1] }</p></div>
              <div><p>Scrolled to: { scrollPosition }</p></div>
              <div className='grid grid-cols-3'>
                { socialLinks }
            </div>
        </div>
    )
}