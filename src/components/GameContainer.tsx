import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import LoadingScreen from './game/LoadingScreen'
import MainScene from './game/scenes/MainScene'
import { useTheme } from '../stores/uiStore'


export default function GameCanvas() {
    const theme = useTheme()    
    return (
        <div className={`fixed h-screen w-screen left-0 top-0 bg-gradient-to-t ${theme === "dark" ? "bg-black" : "bg-white"} transition-all ease-in duration-1000 z-[-1] pointer-events-auto`}>
            <Canvas 
                className="bg-transparent"
                shadows
                dpr={1.5}   
      /*          onCreated={(state) => (
                state.gl.toneMappingExposure = 1.5
                )} */
            >
                <Suspense fallback={<LoadingScreen onStart={()=>console.log('Starting')}/>}>
                    <MainScene />
                </Suspense>
            </Canvas>
        </div>
    )
}