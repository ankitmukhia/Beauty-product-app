/* eslint-disable prettier/prettier */
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const FETCH_API = 'https://react-native-developer-exercise.onrender.com/products/';

export const fetchData = createAsyncThunk(
  'sephora/fetchData',
  async ({endpoint}) => {
    const response = await axios.get(`${FETCH_API}${endpoint}`); // Update the URL to your API endpoint
    return response.data; // Return the response data
  },
);

export const searchProducts = createAsyncThunk(
  'sephora/searchProducts',
  async query => {
    const response = await axios.get(`${FETCH_API}/search?query=${query}`); // Update the URL to your search API endpoint
    return response.data; // Return the response data
  },
);
