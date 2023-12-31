import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

const Arena = () => {
    const gltf = useLoader(GLTFLoader, './assets/models/Arena.gltf')
    return <primitive object={gltf.scene} scale={1} />
  }

export default Arena