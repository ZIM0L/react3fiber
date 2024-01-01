import { Canvas } from "@react-three/fiber";
import { Sphere, Box, Wireframe, Cylinder, Environment } from "@react-three/drei";
import { useAppDispatch } from "../hooks/hooks";
import { updateSelected } from "../redux/InputData";
import { useState } from "react";

function ChooseShape() {

  const dispatch = useAppDispatch();
  // const inputData = useAppSelector((state) => state.Input);

  const [whatsHovered, setWhatsHovered] = useState([1,0,0])

  const handleInputChange = (field: string) => {
   dispatch(updateSelected(field));
   switch (field) {
    case "Box":
      setWhatsHovered([1,0,0])
      break;
    case "Cylinder":
      setWhatsHovered([0,1,0])
      break;
    case "Sphere":
      setWhatsHovered([0,0,1])
      break;
   
    default:
      break;
   }

    }

  return (
    <div className="flex flex-col space-y-10">
      <div>
      <Canvas>
        <Box
          position={[0,0,3.5]}
          rotation={[0.5,-0.5,0]}
          args={[1,1,1]} // Width, height, depth. Default is [1, 1, 1]
          onPointerEnter={(event)=> (event.stopPropagation())}
        >
            <Wireframe simplify={true}  stroke={"#000000"}  thickness={0.015} />
          <meshPhongMaterial color={0xffffff}/>
        </Box>
        <ambientLight intensity={2} />
        <Environment background near={1} far={1000} resolution={256}>
          <mesh scale={50}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshBasicMaterial color={0x202020} side={1} />
          </mesh>
        </Environment>
      </Canvas>
      <button onClick={() => handleInputChange("Box")} className={`text-white  p-2 ${whatsHovered[0] ? "bg-red-700" : "bg-slate-600"}`}>Select Box</button>
      </div>
      
      <div>
      <Canvas>
     
        <Cylinder
          position={[0,0.1,3]}
          args={[1,1,1]} // Width, height, depth. Default is [1, 1, 1]
          rotation={[0.5,-0.5,0]}
          
        >
            <Wireframe simplify={true}  stroke={"#000000"}  thickness={0.015} />
          <meshPhongMaterial color={0xffffff}/>
        </Cylinder>
        <ambientLight intensity={2} />
        <Environment background near={1} far={1000} resolution={256}>
          <mesh scale={50}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshBasicMaterial color={0x202020} side={1} />
          </mesh>
        </Environment>
      </Canvas>
      <button onClick={() => handleInputChange("Cylinder")} className={`text-white  p-2 ${whatsHovered[1] ? "bg-red-700" : "bg-slate-600"}`}>Select Cylinder</button>
      </div>

      <div>
      <Canvas>+
        <Sphere
          position={[0,0,3.2]}   
        >
            <Wireframe simplify={true}  stroke={"#000000"}  thickness={0.015} />
          <meshPhongMaterial color={0xffffff}/>
        </Sphere>
        <ambientLight intensity={2} />
        <Environment background near={1} far={1000} resolution={256}>
          <mesh scale={50}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshBasicMaterial color={0x202020} side={1} />
          </mesh>
        </Environment>
      </Canvas>
      <button onClick={() => handleInputChange("Sphere")} className={`text-white  p-2 ${whatsHovered[2] ? "bg-red-700" : "bg-slate-600"}`}>Select Sphere</button>
      </div>


    </div>
  );
}
export default ChooseShape;
