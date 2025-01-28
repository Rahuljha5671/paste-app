import { configureStore } from '@reduxjs/toolkit'
import  pasteReducer  from './Redux/pasteSlice'

export const store = configureStore({
  reducer: {pasteReducer:pasteReducer},
})