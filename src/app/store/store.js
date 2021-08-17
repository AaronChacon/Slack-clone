import { configureStore } from '@reduxjs/toolkit';
import { counterSlice as counterReducer } from '../features/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
