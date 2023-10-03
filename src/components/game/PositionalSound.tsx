import { useLoader, useThree } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import { AudioListener, AudioLoader, PositionalAudio} from 'three'

interface IAudioProps {
  url: string 
}

export default function PositionalSound({ url }:IAudioProps) {
    const sound = useRef() as  React.MutableRefObject<PositionalAudio>
    
    const { camera } = useThree()
    const [listener] = useState(() => new AudioListener())
    const buffer = useLoader(AudioLoader, url)
    
    console.log(buffer, url)

    useEffect(() => {
      sound.current.setBuffer(buffer)
      sound.current.setRefDistance(1)
      sound.current.setLoop(true)
      sound.current.play()
      camera.add(listener)
      return () => camera.remove(listener)
    }, [buffer, camera, listener])
    
    return <positionalAudio ref={sound} args={[listener]} />
  }