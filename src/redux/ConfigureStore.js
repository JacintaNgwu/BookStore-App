import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './Books/Books';
import categoryReducer from './Categories/Category';
import bookSlice from './Books/FetchBook';

const store = configureStore({
  reducer: {
    books: booksReducer,
    category: categoryReducer,
    book: bookSlice,
  },
});
export default store;
