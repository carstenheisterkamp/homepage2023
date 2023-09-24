import { PlaneProps } from '@react-three/cannon';
import { DoubleSide } from 'three';
import { degToRad } from 'three/src/math/MathUtils.js';

export default function Floor() {
  /*   const p = usePlane(() => ({ mass: 0, ...props })) */
    
    return (
        <mesh castShadow position={[0,0,0]} rotation={[-(degToRad(90)),0,0]}>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial side={DoubleSide}/>
        </mesh>
    )
  }