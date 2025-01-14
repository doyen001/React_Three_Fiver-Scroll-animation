import { Float, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import React from "react";

function AnimatedBoxes() {
  return (
    <>
      <Float>
        <mesh scale={[1, 1, 1]} position={[5, 1, -1.5]}>
          <sphereGeometry />
          <MeshDistortMaterial opacity={1} transparent distort={1} speed={5} color="yellow" />
        </mesh>
      </Float>
      <Float>
        <mesh scale={[1.4, 1.4, 1.4]} position={[-2, 1, -2]}>
          <boxGeometry />
          <MeshWobbleMaterial opacity={0.8} transparent factor={1} speed={5} color={"blue"} />
        </mesh>
      </Float>
      <Float>
        <mesh scale={[1, 1, 1]} position={[4, -2, 3]}>
          <boxGeometry />
          <MeshWobbleMaterial opacity={0.8} transparent factor={1} speed={5} color={"red"} />
        </mesh>
      </Float>
      <Float>
        <mesh scale={[0.5, 0.5, 0.5]} position={[-4, -2, 3]}>
          <torusGeometry />
          <MeshDistortMaterial opacity={1} transparent distort={1} speed={5} color="yellow" />
        </mesh>
      </Float>
    </>
  );
}

export default AnimatedBoxes;
