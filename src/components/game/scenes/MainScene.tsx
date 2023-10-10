import { OrbitControls, PerspectiveCamera, Environment, ContactShadows, Lightformer } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import Box from '../entities/Box'
import GLTFFactory from '../entities/GLTFFactory'

export default function MainScene() {


  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 3]} />
      <OrbitControls target={[0, 1, 0]} maxPolarAngle={Math.PI / 2} />

{/*        <Environment preset="studio" /> */}
{/*       <Environment preset="city">
        <Lightformer intensity={8} position={[10, 5, 0]} scale={[10, 50, 1]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
      </Environment> */}
      
      <ContactShadows scale={150} position={[0.66, 0, 0.66]} opacity={0.75} />
      <fog attach="fog" args={[16773354, 10, 60]} />


      <ambientLight intensity={2} />
    {/*   <spotLight position={[20, 20, 25]} penumbra={1} angle={0.2} color="white" castShadow shadow-mapSize={[512, 512]} />
      <directionalLight position={[0, 5, -4]} intensity={4} />
      <directionalLight position={[0, -15, -0]} intensity={4} color="green" />
      <spotLight position={[20, 20, 10]} penumbra={1} castShadow angle={0.2} /> */}


      <Physics gravity={[0, 0, 0]} iterations={10} broadphase="SAP">
        <Box position={[0, 1, 0]} />
        <GLTFFactory url='./assets/models/Greencube.gltf' scale={1.0} position={[0,2,2]} />
      </Physics>
    </>
  );
}
