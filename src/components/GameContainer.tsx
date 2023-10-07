import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import LoadingScreen from './game/LoadingScreen'
import MainScene from './game/scenes/MainScene'


export default function GameCanvas() {
    return (
        <div className="fixed h-screen w-screen left-0 top-0 z-[-1] bg-gradient-to-t from-[#f1f6f6] dark:from-black to-[#e6eaf5] dark:to-[#101010] pointer-events-auto">
            <Canvas 
                shadows
                dpr={1.5}   
               onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
            >
                <Suspense fallback={<LoadingScreen onStart={()=>console.log('Starting')}/>}>
                    <MainScene />
                </Suspense>
            </Canvas>
        </div>
    )
}
