import { createSlice } from '@reduxjs/toolkit'

export interface ShapeInt {
  position: number[];
  rotation: number[];
  color: string;
  size: number[];
  selected: string ; // lub konkretne typy np. [number, number, number]
  selectedToEdit: ShapeInt | null
  // inne właściwości kształtu
}
// init
const initialState: ShapeInt = {
    position: [0,0,0],
    rotation: [0,0,0],
    color: "#ffffaa",
    size: [1,1,1],
    selected: "Box" ,
    selectedToEdit: null 

};

export const InputData = createSlice({
  name: 'InputData',
  initialState,
  reducers: {
    updatePosition: (state, action) => {
      state.position = action.payload;
    },
    updateRotation: (state, action) => {
      state.rotation = action.payload;
    },
    updateColor: (state, action) => {
      state.color = action.payload;
    },
    updateSize: (state, action) => {
      state.size = action.payload;
    },
    updateSelected: (state, action) => {
      state.selected = action.payload;
    },
    updateSelectedToEdit: (state, action) => {
      state.selectedToEdit = action.payload;
    },
    updateSelectedToEditPosition: (state, action) => {
      if (state.selectedToEdit) {
        return {
          ...state,
          selectedToEdit: {
            ...state.selectedToEdit,
            position: action.payload,
          },
        };
      }
      return state; // Return the unchanged state if selectedToEdit is null
    },
  }
})

export const { updatePosition,updateRotation,updateColor,updateSize,updateSelected,updateSelectedToEdit,updateSelectedToEditPosition } = InputData.actions

export default InputData.reducer

// Redux State Slice (database)