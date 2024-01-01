import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  RoundedBox,
  PivotControls
} from "@react-three/drei";
import Box from "../Shapes/Box";
import Plane from "../Shapes/Plane";
import * as THREE from "three";

import {  useAppSelector } from "../hooks/hooks";
import { useRef } from "react";



const CanvasTest = () => {
  const cube = useRef(null);
    const count = useAppSelector((state) => state) 
    return(
    
    <Canvas style={{ position: "absolute" }} >
      <OrbitControls makeDefault/>
      <ambientLight intensity={0.2} />
      {/* <spotLight position={[0,1.2,-0.3]} color={0xbba0c0} intensity={6} castShadow /> */}
      <directionalLight position={[0, 4, 1]} args={[0xac733f, 10]} castShadow />

      <Environment background near={1} far={1000} resolution={256}>
        <mesh scale={100}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial color={0x22f3bb} side={THREE.BackSide} />
        </mesh>
      </Environment>
      
      <PivotControls
        visible={true}
        rotation={[0, -Math.PI / 2, 0]}
        depthTest={false}
        lineWidth={2}
        anchor={[0, 1, 0]}
      >
      <mesh ref={cube} position={[0.75, 0.5, 1]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 1, 0.5]} />
        <meshStandardMaterial />
      </mesh>
      </PivotControls>

    </Canvas>
    )
}

export default CanvasTest