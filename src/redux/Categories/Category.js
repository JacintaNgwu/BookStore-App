export const CHECK_STATUS = 'BookStore-App/CategorIES/CHECK_STATUS';

const initialState = {
  categories: [],
};

// action
export const checkStatus = () => ({
  type: CHECK_STATUS.BOOK_STATUS_CHECKED,
});

// reducer
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS.BOOK_STATUS_CHECK:
      return {
        ...state,
        categories: [...state.categories, 'Under construction'],
      };
    default:
      return state;
  }
};

export default categoryReducer;
