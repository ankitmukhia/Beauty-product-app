/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import Slice from './slice/Slice';
export const store = configureStore({
  reducer: {
    products: Slice,
  },
});
