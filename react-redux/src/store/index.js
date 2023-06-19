import { configureStore } from '@reduxjs/toolkit'
import counterFunc from '../store/features/counter'

export default configureStore({
  reducer: {
    counter: counterFunc
  },
})