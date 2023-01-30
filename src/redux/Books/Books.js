import { createReducer } from '@reduxjs/toolkit';

export const ADD_BOOK = 'BookStore-App/Books/Add_Book';
export const REMOVE_BOOK = 'BookStore-App/Books/Remove_Book';

const initialState = {
  books: [],
};

const bookReducer = createReducer(initialState, (construct) => {
  construct
    .addCase(ADD_BOOK, (state, action) => {
      state.books.push(action.payload);
    })
    .addCase(REMOVE_BOOK, (state, action) => {
      state.books.filter((book) => book.id !== action.payload);
    });
  construct.addDefaultCase((state) => state);
});
export default bookReducer;
