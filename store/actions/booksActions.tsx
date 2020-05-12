import {
  SET_BOOKS,
  UPDATE_BOOK,
  CREATE_BOOK,
  TOGGLE_FAV_BOOK,
} from "../../types";

export const fetchBooks = () => {
  return async (dispatch: any, getState: any) => {
    try {
      const response = await fetch(
        "https://react-native-books-app.firebaseio.com/books.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const loadedBooks = await response.json();
      // console.log("loadedBooks loadedBooks ", loadedBooks);

      dispatch({
        type: SET_BOOKS,
        loadedBooks: loadedBooks,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const toggleBookFav = (id: string) => {
  return async (dispatch: any, getState: any) => {
    // console.log("GETSTATEDDDD ", getState);
    // console.log("ididvidididid ", id);
    dispatch({ type: TOGGLE_FAV_BOOK, id: id });
  };
};
