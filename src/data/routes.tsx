import AboutPage from '../pages/About'
import ErrorPage from '../pages/Error'
import HomePage from '../pages/Home'
import ImprintPage from '../pages/Imprint'
import JournalPage from '../pages/Journal'
import PlayPage from '../pages/Play'
import PrivacyPage from '../pages/Privacy'
import WorkPage from '../pages/Work'

const routes = [{
    path: '/',
    element: <HomePage />,
    name: 'Home',
    location: 'main',
  },{
    path: '/about',
    element: <AboutPage />,
    name: 'About',
    location: 'main',
  },{
    path: '/work',
    element: <WorkPage />,
    name: 'Work',
    location: 'main',
  },{
    path: '/imprint',
    element: <ImprintPage />,
    name: 'Imprint',
    location: 'footer',
  },{
    path: '/journal',
    element: <JournalPage />,
    name: 'Journal',
    location: 'main',
  },{
    path: '/play',
    element: <PlayPage />,
    name: 'Play',
    location: 'main',  
  },{
    path: '/privacy',
    element: <PrivacyPage />,
    name: 'Privacy',
    location: 'footer',  
  }, 
  {
    path: '*',
    element: <ErrorPage />,
    name: 'Error',
    location: '',  
  }]

export default routes