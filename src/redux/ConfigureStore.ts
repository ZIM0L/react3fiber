import { configureStore } from '@reduxjs/toolkit'
import ShapeData from "./ShapeCreator.ts"
import InputData from './InputData.ts'

export const Store = configureStore({
  reducer: {
    Shape: ShapeData,
    Input: InputData
  }
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch

// only touch when adding new "Redux State Slice"