import { OrbitControls, PerspectiveCamera, Sky } from '@react-three/drei'
import { Color } from 'three'
import Box from '../entities/Box'

export default function MainScene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 3, 2]} />
      <Sky
        distance={450000}
        sunPosition={[5, 1, 8]}
        inclination={0}
        azimuth={0.25}
       />
      <ambientLight intensity={0.1}/>
      <fog attach="fog" args={[new Color(10,10,10), 0, 25]} />
      <Box position={[0, 1, 0]} />
      <OrbitControls />
    </>
  )
}