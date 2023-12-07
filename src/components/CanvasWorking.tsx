import { Canvas } from "@react-three/fiber";
import { Environment, Box, Sphere, Cylinder, Wireframe, OrbitControls } from "@react-three/drei";
import { useAppSelector } from "../hooks/hooks";
import { useState } from "react";

function CanvasWorking() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const shape = useAppSelector((state) => state.Shape) ;

  const getShapeComponent = (shapeType : string) => {
    // console.log(shape.storedShapes)
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

  return (
    <>
      <Canvas id="CanvasMain">
        <OrbitControls />
        {shape.storedShapes.map((box, key) => {
          const ShapeComponent = getShapeComponent(box.selected);
          return (
            <ShapeComponent
            key={key}
            onPointerEnter={(event) => (event.stopPropagation(), setHoveredIndex(key))}
            onPointerOut={(event) => (event.stopPropagation(), setHoveredIndex(null))}
            position={[box.position[0], box.position[1], box.position[2]]}
            rotation={[0, 0, 0]}
          >
            <Wireframe simplify={true} stroke={"#000000"} thickness={0.015} />
            <meshPhongMaterial color={hoveredIndex === key ? 0xaaff : 0xfffff} />
            {box.selected !== "sphere" && <meshStandardMaterial  />}
          </ShapeComponent>
          );
        })}
        <ambientLight intensity={2} />
        <Environment background near={1} far={1000} resolution={256}>
          <mesh scale={50}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshBasicMaterial color={0x000000} side={1} />
          </mesh>
        </Environment>
      </Canvas>
    </>
  );
}

export default CanvasWorking;
