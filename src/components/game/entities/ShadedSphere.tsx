import { useFrame } from "@react-three/fiber"
import { useTheme } from "../../../stores/uiStore";
/* import BlueWaveShaderMaterial from "../materials/BlueWaveShader" */
/* import DotShaderMaterial from "../materials/DotShader" */
import GridShaderMaterial from "../materials/GridShader"
/* import LineShaderMaterial from "../materials/LineShader" */
import { useRef } from "react"

const ShadedSphere = (props) => {
    const sphereRef = useRef()
    const theme = useTheme()

    useFrame(({ clock }) => {
      sphereRef.current.material.uniforms.uTime.value = clock.oldTime * 0.0005
      sphereRef.current.material.uniforms.uColor.value = theme === 'dark' ? 1.0 : 0.0
    });
  
    return (
      <mesh ref={sphereRef} {...props}>
        <sphereGeometry args={[6, 64, 64]}/>
       {/*  <shaderMaterial attach="material" args={[BlueWaveShaderMaterial]} /> */}
       <shaderMaterial attach="material" args={[GridShaderMaterial]} />
      </mesh>
    );
  };

  export default ShadedSphere