import { Text3D, useMatcapTexture } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import * as THREE from "three";
const material = new THREE.MeshMatcapMaterial();

const Creator = () => {
  // D1AC04_F8E50A_EDD004_B38D04
  const [matcapTexture] = useMatcapTexture("E1E1D4_777C7B_9FA19A_898F8D", 256);

  useEffect(() => {
    matcapTexture.encoding = THREE.sRGBEncoding;
    matcapTexture.needsUpdate = true;

    material.matcap = matcapTexture;
    material.needsUpdate = true;
  }, []);

  const memoizedCreator = React.useMemo(() => {
    return (
      <>
        <group castShadow position={[-6, 0, 0]} scale={1.2}>
          {"DOSTONBEK"?.split("")?.map((item, index) => (
            <Text3D
              key={index}
              font="./fonts/Rowdies.json"
              size={1}
              height={0.5}
              material={material}
              curveSegments={20}
              bevelEnabled
              castShadow
              bevelThickness={0.02}
              bevelSize={0.02}
              bevelOffset={0}
              bevelSegments={5}
              position={[index / 0.9, 0, 0]}
              rotation-y={0}
              maxWidth={1}
            >
              {item}
            </Text3D>
          ))}
        </group>
      </>
    );
  }, [matcapTexture]);

  return memoizedCreator;
};

export default React.memo(Creator);
