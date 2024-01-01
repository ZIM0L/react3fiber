import { Canvas } from "@react-three/fiber";
import { Box, Sphere, Cylinder, Wireframe, OrbitControls, Sky} from "@react-three/drei";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { useState } from "react";
import { updateSelectedToEdit, updatePosition } from "../redux/InputData";

function CanvasWorking() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const shape = useAppSelector((state) => state.Shape) ;
  const dispatch = useAppDispatch();

  const getShapeComponent = (shapeType : string) => {
    switch (shapeType) {
      case "Box":
        return Box;
      case "Sphere":
        return Sphere;
      case "Cylinder":
        return Cylinder;
      default:
        return Box; // Domyślny kształt
    }
  };
  const handleInputChangePosition = (value: number[]) => {
        dispatch(updatePosition(value))

  }

  return (
    <>
      <Canvas id="CanvasMain">
        <OrbitControls />

        {shape.storedShapes.map((shape, key) => {
          const ShapeComponent = getShapeComponent(shape.selected);
          return (
            <ShapeComponent
            key={key}
            onPointerEnter={(event) => (event.stopPropagation(), setHoveredIndex(key))}
            onClick={()=>(
            handleInputChangePosition(shape.position),  
            dispatch(updateSelectedToEdit(shape)),console.log(shape.position))
            }
            onPointerOut={(event) => (event.stopPropagation(), setHoveredIndex(null))}
            position={[shape.position[0], shape.position[1], shape.position[2]]}
            rotation={[shape.rotation[0], shape.rotation[1], shape.rotation[2]]}
          >
            <Wireframe simplify={true} stroke={"#000000"} thickness={0.015} />
            <meshPhongMaterial  color={hoveredIndex == key ? 0xaaffff : shape.color} />
           
          </ShapeComponent>
          );
        })}

        
        <ambientLight intensity={3} />
        <Sky distance={450000} sunPosition={[0, 2, 0]} inclination={4} azimuth={10} />
      </Canvas>
    </>
  );
}

export default CanvasWorking;
