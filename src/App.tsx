import "./App.css";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  Environment,
  RoundedBox,
} from "@react-three/drei";
import Box from "./Shapes/Box";
import Plane from "./Shapes/Plane";
import * as THREE from "three";

function App() {
  return (
    <Canvas style={{ position: "absolute" }} shadows>
      <OrbitControls />

      {/* <arrowHelper position={[3,2,0]}  args={[new Vector3(5,1,1),new Vector3(1,1,1),1,0x2233bb]}/> */}
      <Box />
      <Plane />
      <RoundedBox args={[0, 1, 1]}  radius={1} position={[0, 2, 0.6]} castShadow  >
        <meshPhongMaterial  color={0x22f3bb}  />
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
  );
}

export default App;
