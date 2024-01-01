import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ShapeInt {
  position: number[];
  rotation: number[];
  color: string;
  size: number[];
  selected: string ; // lub konkretne typy np. [number, number, number]
  selectedToEdit: ShapeInt | null
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
    updateSelectedShapePosition: (state, action: PayloadAction<{ index: number, position: number[] }>) => {
      const { index, position } = action.payload;
      state.storedShapes[index].position = position;
    },
  },
});

export const { addShape, updateSelectedShapePosition } = shapesSlice.actions;

export default shapesSlice.reducer;
