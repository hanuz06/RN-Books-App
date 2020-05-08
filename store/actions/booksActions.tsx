import { SET_BOOKS, UPDATE_BOOKS, CREATE_BOOKS } from "../../types";

export const fetchBooks = () => {
  return async (dispatch:any, getState:any) => {
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
        loadedBooks: loadedBooks        
      })
     
    } catch (err) {
      throw err;
    }
  };
};
