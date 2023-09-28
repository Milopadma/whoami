/*
  Auto-generated by Spline
*/
import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/nFttO-5Kw6Yjlkny/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#74757a']} />
      <group {...props} dispose={null}>
        <scene name="Scene 1">
          <group name="untitled 391350-Mesh" rotation={[0, 0, 0]} scale={25}>
            <mesh
              name="model_0"
              geometry={nodes.model_0.geometry}
              material={nodes.model_0.material}
              castShadow
              receiveShadow
            />
          </group>
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={0.7}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1000}
            shadow-camera-right={1000}
            shadow-camera-top={1000}
            shadow-camera-bottom={-1000}
            position={[200, 300, 300]}
          />
          <OrthographicCamera name="1" makeDefault={true} far={10000} near={-50000} />
          <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
        </scene>
      </group>
    </>
  )
}
