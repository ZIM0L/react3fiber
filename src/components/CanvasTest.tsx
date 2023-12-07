import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  RoundedBox,
} from "@react-three/drei";
import Box from "../Shapes/Box";
import Plane from "../Shapes/Plane";
import * as THREE from "three";

import {  useAppSelector } from "../hooks/hooks";



const CanvasTest = () => {
    const count = useAppSelector((state) => state) 
    return(
    
    <Canvas style={{ position: "absolute" }} >
      <OrbitControls />
      {/* <arrowHelper position={[3,2,0]}  args={[new Vector3(5,1,1),new Vector3(1,1,1),1,0x2233bb]}/> */}
      <Box />
      <Plane />
      <RoundedBox args={[1, 1, count.test]}  radius={1} position={[0, 2, 0.6]} castShadow   >
        <meshPhongMaterial  color={0x22f3bb} wireframe />
      </RoundedBox>
      <RoundedBox position={[4, 2, 0.6]}
      args={[1, 1, 1]} // Width, height, depth. Default is [1, 1, 1]
      radius={0.05} // Radius of the rounded corners. Default is 0.05
      smoothness={4} // The number of curve segments. Default is 4
      bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
      creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
    // All THREE.Mesh props are valid
    >
      <meshPhongMaterial color="#f3f3f3" />
    </RoundedBox>

      <ambientLight intensity={0.2} />
      {/* <spotLight position={[0,1.2,-0.3]} color={0xbba0c0} intensity={6} castShadow /> */}
      <directionalLight position={[0, 4, 1]} args={[0xac733f, 10]} castShadow />

      <Environment background near={1} far={1000} resolution={256}>
        <mesh scale={100}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial color={0x22f3bb} side={THREE.BackSide} />
        </mesh>
      </Environment>
    </Canvas>
    )
}

export default CanvasTest