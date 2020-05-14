import {
  SET_BOOKS,  
  CREATE_BOOK,
  IBookState,
  BookActionsType,
  TOGGLE_FAV_BOOK,  
  IBook,
} from "../../types";

const initialState: IBookState = {
  allBooks: [],
  favBooks: [],
};

export default (state = initialState, action: BookActionsType) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        allBooks: action.loadedBooks,
      };
    case TOGGLE_FAV_BOOK:
      const existingIndex: number = state.favBooks.findIndex(
        (book) => book.id === action.id
      );

      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favBooks];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favBooks: updatedFavMeals };
      } else {
        const book: any = state.allBooks.find((book) => book.id === action.id);

        return { ...state, favBooks: state.favBooks.concat(book) };
      }    
    default:
      return state;
  }
};
