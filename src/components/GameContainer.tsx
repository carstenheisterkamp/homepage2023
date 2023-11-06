import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import LoadingScreen from './game/LoadingScreen'
import MainScene from './game/scenes/MainScene'
import BackgroundComponent from './BackgroundComponent'
import { useTheme } from '../stores/uiStore'


export default function GameCanvas() {
    const theme = useTheme()    
    return (
        <div className={`fixed h-screen w-screen left-0 top-0 bg-gradient-to-t ${theme === "dark" ? "bg-zinc-900" : "bg-zinc-300"} transition-colors ease-in duration-1000 z-[-1] pointer-events-auto`}>
            <BackgroundComponent />
            <Canvas 
                className="bg-transparent w-full h-full"
                shadows
                dpr={1.5}   
           /*      onCreated={(state) => (
                state.gl.toneMappingExposure = 1.5
                )} */
            >
                <Suspense fallback={<LoadingScreen />}>
                    <MainScene />
                </Suspense>
                <LoadingScreen />
            </Canvas>
        </div>
    )
}