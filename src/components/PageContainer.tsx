import { Route, Routes, useLocation } from 'react-router-dom'
import routes from '../data/routes'
import { AnimatePresence } from 'framer-motion'
import GlitchAnimation from './GlitchAnimation'

export default function PageContainer() {
    const location = useLocation()
    const routeElements = routes.map(({path, element}, key) => <Route path={path} element={element} key={key} />)

    return (
        <div className="absolute w-full h-full top-0 left-0 z-[10]">
            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname} >
                    { routeElements }
                </Routes>
            </AnimatePresence>
            <GlitchAnimation />
        </div>
    )
}