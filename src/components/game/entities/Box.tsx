import { useState, useMemo } from 'react'
import * as THREE from 'three'
import {motion} from 'framer-motion-3d'


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
      transition={{ repeat: Infinity, ease: "linear", duration: 600 }}
      onPointerDown={
        () => {
          setDarkmode(!darkMode)
          setCount((count + 1) % 2)
        }
      }
      geometry={ geometry[count] }>

      <motion.meshStandardMaterial
        initial="hidden"
        transition={{ duration: 10 }}
        animate= { darkMode ? 'visible' : 'hidden'}
        variants={ variants }
      /*   wireframe */
      />
    </motion.mesh>
  )
}
