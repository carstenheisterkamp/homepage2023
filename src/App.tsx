import GameContainer from './components/GameContainer'
import PageContainer from './components/PageContainer'
import CookieBanner from './components/CookieBanner'
import { BrowserRouter  } from 'react-router-dom'
import Navigation from './components/Navigation'
import BrandingBar from './components/BrandingBar'
import ToolBar from './components/ToolbBar'
import { useEffect } from 'react'
import { useTheme, useCookies, useIsTouchDevice, useSetIsTouchDevice, useSetPointerPosition } from './stores/uiStore'


function App() {

  const isTouchDevice = useIsTouchDevice()
  const setIsTouchDevice = useSetIsTouchDevice()
  const theme = useTheme()
  const cookiesAccepted = useCookies()
  const setPointerPosition = useSetPointerPosition()


  useEffect(() => {

    try {
      const localTheme = JSON.parse(localStorage.getItem('theme') as string);
      if (localTheme) {
        document.documentElement.setAttribute('data-mode', localTheme.state.theme);
        document.documentElement.className = localTheme.state.theme;
      }
    } catch (err) {
      console.log('error loading the color theme')
    }

    if (window.matchMedia) {setIsTouchDevice(window.matchMedia("(pointer:coarse)").matches)}

    if(isTouchDevice) {
      const handleDeviceOrientation = (event: unknown) => {
        console.log(event)
      }
      window.addEventListener('deviceorientation', handleDeviceOrientation)
      
      return () => {
        window.removeEventListener('deviceorientation', handleDeviceOrientation )
      }
    } else {
      const handlePointerEvent = (event: { clientX: number; clientY: number } ) => {
        setPointerPosition([event.clientX, event.clientY])
      }

      window.addEventListener('mousemove', handlePointerEvent)
    
      return () => {
        window.removeEventListener('mousemove', handlePointerEvent )
      }
    }
  })
  , [theme, isTouchDevice, setIsTouchDevice, setPointerPosition]

  return (
    <div className={` ${theme === "dark" ? "text-neutral-200" : "text-black"}`}>
      { cookiesAccepted ? null : <CookieBanner /> } 
      <BrowserRouter>
      <BrandingBar/>
      <Navigation/>
      <ToolBar />
      <PageContainer />
      <GameContainer />
      </BrowserRouter>
    </div>
  )
}

export default App
