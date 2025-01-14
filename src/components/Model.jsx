import React, { useRef, useState } from 'react';
import { useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const groupRef = useRef();
  const data = useScroll();
  const [position, setposition] = useState([3.5,0.3,3])

  useFrame(() => {
    groupRef.current.rotation.y = data.offset * Math.PI * 2;
    groupRef.current.rotation.x = Math.sin(data.offset * - Math.PI * 2);

    const pulsatingScale = 0.7 + Math.sin(data.offset * Math.PI * 2) * 0.5;
    groupRef.current.scale.set(pulsatingScale, pulsatingScale, pulsatingScale);
    
  });

  const { nodes } = useGLTF('/models/pilot.gltf');
  return (
    <group position={[3.5,0.3,0]} ref={groupRef} {...props} dispose={null} scale={0.5}>
      {Object.values(nodes).map((child, index) => (
        <mesh key={index} geometry={child.geometry} material={child.material} />
      ))}
    </group>
  );
}
