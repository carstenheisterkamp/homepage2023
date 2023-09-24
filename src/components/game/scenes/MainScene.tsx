import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import Box from '../entities/Box'
import Greenbox from '../entities/Greenbox'
import Pointer from '../../Pointer'
/* import { EffectComposer, SSAO } from '@react-three/postprocessing' */

export default function MainScene() {

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 3]} />
      <Environment preset="studio" />
      <ambientLight intensity={0.75} />
      <spotLight position={[20, 20, 25]} penumbra={1} angle={0.2} color="white" castShadow shadow-mapSize={[512, 512]} />
      <directionalLight position={[0, 5, -4]} intensity={4} />
      <directionalLight position={[0, -15, -0]} intensity={4} color="red" />
      <ContactShadows scale={150} position={[0.66, 0, 0.66]} opacity={0.75} />
      <fog attach="fog" args={[0xfff0ea, 10, 60]} />

      <Physics gravity={[0, 0, 0]} iterations={10} broadphase="SAP">
          <Box position={[0, 1, 0]} />
          <Greenbox/>
          <Pointer />
      </Physics>
      <OrbitControls target={[0, 1, 0]} maxPolarAngle={Math.PI / 2}/>
    </>
  )
}