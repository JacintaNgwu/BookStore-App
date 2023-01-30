import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './Books/Books';
import categoryReducer from './Categories/Category';

const store = configureStore({
  reducer: {
    books: booksReducer,
    category: categoryReducer,
  },
});
export default store;
