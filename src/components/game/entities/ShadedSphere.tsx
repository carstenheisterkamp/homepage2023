import { useFrame } from "@react-three/fiber"
import BlueWaveShaderMaterial from "../materials/BlueWaveShader"
import { useRef } from "react"

const ShadedSphere = (props) => {
    const sphereRef = useRef();
  
    useFrame(({ clock }) => {
      sphereRef.current.material.uniforms.uTime.value = clock.oldTime * 0.0005;
    });
  
    return (
      <mesh ref={sphereRef} {...props}>
        <sphereGeometry args={[3, 64, 64]}/>
        <shaderMaterial attach="material" args={[BlueWaveShaderMaterial]} />
      </mesh>
    );
  };

  export default ShadedSphere