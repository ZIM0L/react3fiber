import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { addShape } from "../redux/ShapeCreator";
import {
  updateColor,
  updatePosition,
  updateRotation,
  updateSelectedToEditPosition,
  updateSelectedToEdit,
} from "../redux/InputData";
import { useState } from "react";
import { updateSelectedShapePosition } from "../redux/ShapeCreator";

function InputTab() {
  const [editSwitch, setEditSwitch] = useState(false);
  const dispatch = useAppDispatch();
  const inputData = useAppSelector((state) => state.Input);
  const Shapes = useAppSelector((state) => state.Shape);

  const handleAddBox = () => {
    dispatch(addShape(inputData));
  };

  const handleInputChangePosition = (value: number, field: string) => {
    switch (field) {
      case "x":
        //console.log(inputData.selectedToEdit);
        dispatch(
          updatePosition([value, inputData.position[1], inputData.position[2]])
        );
        break;
      case "y":
        dispatch(
          updatePosition([inputData.position[0], value, inputData.position[2]])
        );
        break;
      case "z":
        dispatch(
          updatePosition([inputData.position[0], inputData.position[1], value])
        );
        break;
      default:
        break;
    }
    if (editSwitch) {
      Shapes.storedShapes.forEach((shape, key) => {
        if (shape == inputData.selectedToEdit) {
          switch (field) {
            case "x":
              console.log(value)
              dispatch(
                updateSelectedShapePosition({
                  index: key,
                  position: [value, shape.position[1], shape.position[2]],
                }),
                );
                console.log(shape);
                dispatch(updateSelectedToEditPosition([value, inputData.position[1], inputData.position[2]]))
                console.log("selected:" + inputData.selectedToEdit.position);
              break;
            case "y":
              dispatch(
                updateSelectedShapePosition({
                  index: key,
                  position: [shape.position[0], value, shape.position[2]],
                })
              );
              break;
            case "z":
              dispatch(
                updateSelectedShapePosition({
                  index: key,
                  position: [shape.position[0], shape.position[1], value],
                })
              );
              break;
            default:
              break;
          }
        }
      });
    }
  };

  return (
    <div
      className={`flex flex-row justify-between text-white border-4 ${
        editSwitch ? "border-red-500" : "border-sky-500"
      }`}
    >
      {/* LEFT */}
      <div className="p-2 flex flex-row space-x-3">
        {/* Input X,Y,Z */}
        <div>
          <div>
            <label>X: {inputData.position[0]} </label>
            <input
              className="bg-black"
              type="range"
              min="-11"
              max="11"
              value={inputData.position[0]}
              onChange={(e) =>
                handleInputChangePosition(Number(e.target.value), "x")
              }
            />
          </div>
          <div>
            <label>Y: {inputData.position[1]} </label>
            <input
              className="bg-black"
              type="range"
              min="-11"
              max="11"
              value={inputData.position[1]}
              onChange={(e) =>
                handleInputChangePosition(Number(e.target.value), "y")
              }
            />
          </div>
          <div>
            <label>Z: {inputData.position[2]} </label>
            <input
              className="bg-black"
              type="range"
              min="-11"
              max="11"
              value={inputData.position[2]}
              onChange={(e) =>
                handleInputChangePosition(Number(e.target.value), "z")
              }
            />
          </div>
        </div>
        {/* Rotation X,Y,Z */}
        <div>
          <div>
            <label>Rotation X: {inputData.rotation[0]} </label>
            <input
              className="bg-black"
              type="range"
              min="-11"
              max="11"
              value={inputData.rotation[0]}
              onChange={(e) =>
                handleInputChangeRotation(Number(e.target.value), "x")
              }
            />
          </div>
          <div>
            <label> Rotation Y: {inputData.rotation[1]} </label>
            <input
              className="bg-black"
              type="range"
              min="-11"
              max="11"
              value={inputData.rotation[1]}
              onChange={(e) =>
                handleInputChangeRotation(Number(e.target.value), "y")
              }
            />
          </div>
          <div>
            <label> Rotation Z: {inputData.rotation[2]} </label>
            <input
              className="bg-black"
              type="range"
              min="-11"
              max="11"
              value={inputData.rotation[2]}
              onChange={(e) =>
                handleInputChangeRotation(Number(e.target.value), "z")
              }
            />
          </div>
        </div>
        {/* color */}
        <div>
          <input
            type="color"
            value={inputData.color}
            onChange={(e) => dispatch(updateColor(e.target.value))}
          />
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex flex-col">
        <button
          disabled={editSwitch}
          className={`${editSwitch ? "text-black" : ""}`}
          onClick={handleAddBox}
        >
          Create Object
        </button>
        <button
          className={`${editSwitch ? "text-black bg-red-800" : ""}`}
          onClick={() => {
            setEditSwitch((prev) => !prev);
          }}
        >
          EDIT MODE
        </button>

        {inputData.selectedToEdit && (
          <div>
            Selected:{" "}
            {inputData.selectedToEdit.selected +
              " " +
              inputData.selectedToEdit.color + " " + inputData.selectedToEdit.position}
          </div>
        )}
      </div>
    </div>
  );
}

export default InputTab;
