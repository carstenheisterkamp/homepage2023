import { Route, Routes, useLocation } from 'react-router-dom'
import routes from '../utils/routes'

export default function PageContainer() {
    const location = useLocation()
    const routeElements = routes.map(({path, element}, key) => <Route path={path} element={element} key={key} />)

    return (
        <div className="z-10">
        <Routes location={location} key={location.pathname} >
            { routeElements }
        </Routes>
      </div>
    )
}