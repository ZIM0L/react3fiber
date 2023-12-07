import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShapeInt {
  position: number[];
  rotation: number[];
  color: number;
  size: number[];
  selected: string; // lub konkretne typy np. [number, number, number]
  // inne właściwości kształtu
}
// typeof whats inside
interface ShapesState {
  storedShapes: ShapeInt[];
}
// init
const initialState: ShapesState = {
  storedShapes: [],
};

export const shapesSlice = createSlice({
  name: "shapes",
  initialState,
  reducers: {
    addShape: (state, action: PayloadAction<ShapeInt>) => {
      state.storedShapes.push(action.payload);
    },
  },
});

export const { addShape } = shapesSlice.actions;

export default shapesSlice.reducer;
