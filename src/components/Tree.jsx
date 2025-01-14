import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Tree(props) {
  const { nodes, materials } = useGLTF('/models/palm_tree.glb')
  return (
    <group {...props} dispose={null} scale={0.2} rotation={[-Math.PI/2,0,0]} position={[2,0,-2]}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Material.001']} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/models/palm_tree.glb')
