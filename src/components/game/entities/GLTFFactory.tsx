import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

interface IGLTFLoaderProps {
  url: string
  position: Array<number>
  scale: number
}

const GLTFModel = (props: IGLTFLoaderProps) => {
    const gltf = useLoader(GLTFLoader, props.url)
    return <primitive object={gltf.scene} scale={props.scale} position={props.position}/>
  }

export default GLTFModel



