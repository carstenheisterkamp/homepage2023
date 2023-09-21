import GameContainer from './components/GameContainer'
import PageContainer from './components/PageContainer'
import { BrowserRouter  } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app w-screen h-screen">
      <BrowserRouter>
        <Header/>
        <PageContainer />
        <Footer/>
      </BrowserRouter>
      <GameContainer />
    </div>
  );
}

export default App
