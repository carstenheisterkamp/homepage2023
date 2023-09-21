import AboutPage from '../pages/About'
import AudioPage from '../pages/Audio'
import ErrorPage from '../pages/Error'
import HomePage from '../pages/Home'
import ImprintPage from '../pages/Imprint'
import LivePage from '../pages/Live'
import NetworkPage from '../pages/Network'
import PrivacyPage from '../pages/Privacy'
import WorkPage from '../pages/Work'

const routes = [{
    path: '/',
    element: <HomePage />,
    name: '/',
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
  },
  {
    path: '/audio',
    element: <AudioPage />,
    name: 'Audio',
    location: 'main',
  },{
    path: '/imprint',
    element: <ImprintPage />,
    name: 'Imprint',
    location: 'footer',
  },{
    path: '/live',
    element: <LivePage />,
    name: 'Live',
    location: 'main',
  },{
    path: '/network',
    element: <NetworkPage />,
    name: 'Network',
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