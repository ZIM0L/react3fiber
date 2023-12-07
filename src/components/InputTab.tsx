import { useAppDispatch, useAppSelector} from "../hooks/hooks";
import { addBox } from "../redux/ShapeCreator";
import {  updatePosition } from "../redux/InputData";

function InputTab() {

  const dispatch = useAppDispatch();
  const inputData = useAppSelector((state) => state.Input);

  const handleAddBox = () => {
    dispatch(addBox(inputData));
  };

  const handleInputChange = (value : number, field : string) => {
    switch (field) {
      case 'x':
        dispatch(updatePosition([value, inputData.position[1], inputData.position[2]]));
        console.log(inputData.position)
        break;
      case 'y':
        dispatch(updatePosition([inputData.position[0], value, inputData.position[2]]));
        break;
      case 'z':
        dispatch(updatePosition([inputData.position[0], inputData.position[1], value]));
        break;
      default:
        break;
    }
  };

  return (
    <div className="border-4 border-sky-500 p-2 text-white">
      <div>
        <label>X: { inputData.position[0]} </label>
        <input
          className="bg-black"
          type="range"
          min="-11" max="11"
          value={inputData.position[0]}
          onChange={(e) => handleInputChange(Number(e.target.value), 'x')}
        />
      </div>
      <div>
        <label>Y: { inputData.position[1]} </label>
        <input
          className="bg-black"
          type="range"
          min="-11" max="11"
          value={inputData.position[1]}
          onChange={(e) => handleInputChange(Number(e.target.value), 'y')}
        />
      </div>
      <div>
        <label>Z: { inputData.position[2]} </label>
        <input
          className="bg-black"
          type="range"
          min="-11" max="11"
          value={inputData.position[2]}
          onChange={(e) => handleInputChange(Number(e.target.value), 'z')}
        />
      </div>
      <button onClick={handleAddBox}>Create Object</button>
    </div>
  );
}

export default InputTab;