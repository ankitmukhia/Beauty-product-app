/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';
import {fetchData, searchProducts} from '../../api';

const initialState = {
  endpoint: [],
  searchedData: [],
  isLoading: true,
};

export const Slice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setEndpoint: (state, action) => {
      state.endpoint = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.searchedData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchData.pending, state => {
        state.isLoading = true;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.searchedData = action.payload;
        state.isLoading = false;
      })
      .addCase(searchProducts.pending, state => {
        state.isLoading = true;
      });
  },
});

// Action creators are generated for each case reducer function
export const {setEndpoint} = Slice.actions;

export const selectData = state => state.products.data;
export const selectSearchedData = state => state.products.searchedData;

export default Slice.reducer;
