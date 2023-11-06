import { useState, useMemo } from 'react'
import * as THREE from 'three'
import {motion} from 'framer-motion-3d'
import { Html } from '@react-three/drei'
import SocialLinks from '../../SocialLinks'

export default function Box(props) {
  
  const [count, setCount] = useState(0)
  const [darkMode, setDarkmode] = useState(false)

  const geometry = useMemo(
    () => [new THREE.BoxGeometry(2.0), new THREE.SphereGeometry(2.0)],
    []
  ) 

  const variants = {
    hidden: { color: 'rgba(255,0,0,1)' },
    visible: { color: 'rgba(0,0,255,1)' },
  }
  
  return (
    <motion.mesh
      {...props}
      animate={{rotateZ: 360, rotateY: 360 }}
      transition={{ repeat: Infinity, ease: "linear", duration: 6000 }}
      onPointerDown={
        () => {
          setDarkmode(!darkMode)
          setCount((count + 1) % 2)
        }
      }
      geometry={ geometry[count] }>

      <motion.meshStandardMaterial
        initial="hidden"
        transition={{ duration: 30 }}
        animate= { darkMode ? 'visible' : 'hidden'}
        variants={ variants }
        wireframe
      />
       <Html 
          as='div'
          transform={true}
        >
          <SocialLinks />
  
     {/*      <h1 className="text-8xl">hello</h1>
          <p className="text-4xl">world</p>   */}
        </Html>
    </motion.mesh>
  )
}
