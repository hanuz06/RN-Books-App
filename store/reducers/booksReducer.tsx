import { SET_BOOKS, UPDATE_BOOKS, CREATE_BOOK, IBookState, BookActionsType } from "../../types";

const initialState: IBookState = {
  allBooks: [],
};

export default (state = initialState, action: BookActionsType): IBookState => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        allBooks: action.loadedBooks,
      };
    default:
      return state;
  }
};
