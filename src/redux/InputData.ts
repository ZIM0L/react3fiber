import { createSlice } from '@reduxjs/toolkit'

export const InputData = createSlice({
  name: 'InputData',
  initialState: {
    position: [0,0,0],
    rotation: [0,0,0],
    color: 0xffffff,
    size: [1,1,1],
    selected: "Box" 
  },
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
  }
})

export const { updatePosition,updateRotation,updateColor,updateSize,updateSelected } = InputData.actions

export default InputData.reducer

// Redux State Slice (database)