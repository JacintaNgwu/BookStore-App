import { createReducer } from '@reduxjs/toolkit';

export const CHECK_STATUS = 'BookStore-App/CategorIES/CHECK_STATUS';

const initialState = {
  status: '',
};

const categoryReducer = createReducer(initialState, (construct) => {
  construct
    .addCase(CHECK_STATUS, (state, action) => {
      const newState = { ...state, status: action.payload };
      return newState;
    });
  construct.addDefaultCase((state) => state);
});
export default categoryReducer;
