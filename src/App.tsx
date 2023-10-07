import GameContainer from './components/GameContainer'
import PageContainer from './components/PageContainer'
import { BrowserRouter  } from 'react-router-dom'
import Navigation from './components/Navigation'
import BrandingBar from './components/BrandingBar'
import ToolBar from './components/ToolbBar'
import { useEffect } from 'react'
import { useTheme } from './stores/uiStore'


function App() {

  const theme = useTheme();

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
  }, [theme])

  return (
    <div className='text-black dark:text-white bg-gray-400 dark:bg-zinc-900'>
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
