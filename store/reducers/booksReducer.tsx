import {
  SET_BOOKS,  
  IBookState,
  BookActionsType,  
  ADD_FAV_BOOK,  
  LOGOUT,
  SET_FAV_BOOKS,
  REMOVE_FAV_BOOK,
} from "../../types";

const initialState: IBookState = {
  allBooks: [],
  favBooks: [],
  booksByCategories: {},
  bookCategories: [],
};

export default (state = initialState, action: BookActionsType) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        allBooks: action.loadedBooks,
        booksByCategories: action.booksByCategories,
        booksCategories: action.bookCategories,
      };    
    case SET_FAV_BOOKS:
      return {
        ...state,
        favBooks: action.favBooks,
      };
    case ADD_FAV_BOOK:
      return { ...state, favBooks: state.favBooks.concat(action.addedBook) };
    case REMOVE_FAV_BOOK:
      const updatedFavMeals = [...state.favBooks];
      updatedFavMeals.splice(action.existingIndex, 1);
      return { ...state, favBooks: updatedFavMeals };
    case LOGOUT:
      return {
        ...state,
        favBooks: [],
      };
    default:
      return state;
  }
};
