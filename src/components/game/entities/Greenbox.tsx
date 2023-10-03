import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

const Greenbox = () => {
    const gltf = useLoader(GLTFLoader, './assets/models/Greencube.gltf')
    return <primitive object={gltf.scene} scale={1.0} />
  }

export default Greenbox



