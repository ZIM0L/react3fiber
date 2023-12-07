import "./App.css";
import InputTab from "./components/InputTab";
import ChooseShape from "./components/ChooseShape";
import CanvasWorking from "./components/CanvasWorking";
// import { increment } from "./redux/counter";
// import { useAppDispatch, useAppSelector } from "./hooks/hooks";

// import CanvasTest from "./components/CanvasTest";

function App() {
  return (
    <>
      <InputTab />
      <div className="flex flex-row">
        <div className="p-5">
          <ChooseShape />
        </div>
        <div className="w-full">
          <CanvasWorking />
        </div>
      </div>
    </>
  );
}

export default App;
