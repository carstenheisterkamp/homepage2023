import GameContainer from './components/GameContainer'
import PageContainer from './components/PageContainer'
import { BrowserRouter  } from 'react-router-dom'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className=" text-black dark:text-white">
      <BrowserRouter>
        <Navigation/>
        <PageContainer />
        <GameContainer />
      </BrowserRouter>
    </div>
  )
}

export default App
