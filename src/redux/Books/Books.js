import { createReducer } from '@reduxjs/toolkit';

export const ADD_BOOK = 'redux/Books/Add_Book';
export const REMOVE_BOOK = 'redux/Books/Remove_Book';

const initialState = {
  books: [
    {
      id: '1',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
    },
    {
      id: '2',
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Science Fiction',
    },
  ],
};

// action
export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

// reducer
const bookReducer = createReducer(initialState, {
  [ADD_BOOK]: (state, action) => {
    state.books.push(action.payload);
  },
  [REMOVE_BOOK]: (state, action) => {
    const filteredBooks = state.books.filter((book) => book.id !== action.payload);
    return { ...state, books: filteredBooks };
  },

});

export default bookReducer;
