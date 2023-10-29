import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import LoadingScreen from './game/LoadingScreen'
import MainScene from './game/scenes/MainScene'


export default function GameCanvas() {
    return (
        <div className="fixed h-screen w-screen bg-gradient-to-t from-[#dfdfdf] dark:from-[#000000] to-[#e7f3ff] dark:to-[#101012] left-0 top-0 z-[-1] pointer-events-auto">
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