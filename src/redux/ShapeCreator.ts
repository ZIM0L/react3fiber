import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'shapes',
  initialState: {
    storedShapes: []
  },
  reducers: {
    addBox: (state, action) => {
      state.storedShapes.push(action.payload)
    },
  }
})

export const { addBox } = counterSlice.actions

export default counterSlice.reducer

// Redux State Slice (database)