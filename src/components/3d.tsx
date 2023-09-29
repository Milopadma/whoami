import { Canvas, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import React from "react";

const Computers = ({ isMobile = false }) => {
  const gltf = useLoader(GLTFLoader, "/untitled.gltf");
  const ref = React.useRef();
  useFrame(() => (ref.current.rotation.y += 0.01));

  return (
    <group>
      <primitive
        ref={ref}
        scale={isMobile ? 0.75 : 2}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        lightMapIntensity={0.5}
        rotation={[-0.01, -2.5, -0]}
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

