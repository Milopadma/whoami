import { Canvas, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

const Computers = ({ isMobile = true }) => {
  const gltf = useLoader(GLTFLoader, "/untitled.gltf");
  const ref = React.useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.01;
    ref.current.rotation.x += 0.01;
    // scale up until 3
    if (ref.current.scale.x < 3) {
      ref.current.scale.x += 0.01;
      ref.current.scale.y += 0.01;
      ref.current.scale.z += 0.01;
    }
  });


  return (
    <group>
      <primitive
        ref={ref}
        castShadow
        scale={isMobile ? 0 : 2}
        position={isMobile ? [3, 1, -2] : [0, -3.25, -1.5]}
        lightMapIntensity={0.5}
        rotation={[-0.01, -2.5, 4]}
        object={gltf.scene}
      />
    </group>
  );
};
const ComputersCanvas = () => {
  
  return (
    <Canvas id="canvas">
      <pointLight position={[10, 10, 10]} />
      <OrthographicCamera
          makeDefault={false}
          far={100000}
          near={0}
          position={[606.792, 751.53, -309.835]}
          rotation={[-2.311, 0.565, 2.611]}
        />
      <OrbitControls />
      <Computers />
    </Canvas>
  );
};

export default ComputersCanvas;

