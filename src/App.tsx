import GameContainer from './components/GameContainer'
import PageContainer from './components/PageContainer'
import { BrowserRouter  } from 'react-router-dom'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="app w-screen h-screen">
      <BrowserRouter>
        <Navigation/>
        <PageContainer />
      </BrowserRouter>
      <GameContainer />
    </div>
  );
}

export default App
