import GameContainer from './components/GameContainer'
import PageContainer from './components/PageContainer'
import CookieBanner from './components/CookieBanner'
import { BrowserRouter  } from 'react-router-dom'
import Navigation from './components/Navigation'
import BrandingBar from './components/BrandingBar'
import ToolBar from './components/ToolbBar'
import { useEffect } from 'react'
import { useTheme, useCookies, useDevice, useSetIsTouchDevice } from './stores/uiStore'


function App() {

  const device = useDevice()
  const setIsTouchDevice = useSetIsTouchDevice()
  const theme = useTheme()
  const cookiesAccepted = useCookies()

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
  }, [theme, device, setIsTouchDevice])

  return (
    <div className={` dark:text-white ${theme === "dark" ? "text-white" : "text-black"}`}>
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
