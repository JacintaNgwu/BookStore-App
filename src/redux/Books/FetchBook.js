import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const API_ID = 'MzffyeYoSnYKkytWVSEh';
const FETCH_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}/books`;
const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk('bookstore/books/fetch', async () => {
  const response = await axios.get(FETCH_URL);
  return response.data;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;
