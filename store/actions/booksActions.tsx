import {
  SET_BOOKS,
  UPDATE_BOOK,
  CREATE_BOOK,
  TOGGLE_FAV_BOOK,
  IBook,
} from "../../types";
import Category from "../../models/category";
import { categoryColors } from "../../constants/Colors";

export const fetchBooks = () => {
  return async (dispatch: any, getState: any) => {
    try {
      const response = await fetch(
        "https://react-native-books-app.firebaseio.com/books.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      // console.log('GETSTATE ', getState().auth.email)

      // all books fetched from Firebase
      const loadedBooks = await response.json();

      const categoriesArray: string[] = loadedBooks.map((book: IBook) => [
        ...book.categories,
      ]);

      // Creates a set of unique names of categories
      const setUniqueCategories = new Set(categoriesArray.flat());
      const uniqueCategoriesArray = Array.from(setUniqueCategories).sort();

      // Set categories that include id, category name, color
      const categoriesData = uniqueCategoriesArray.map((category, index) => {
        const randomInt = Math.floor(Math.random() * 10);
        return new Category(
          (index + 1).toString(),
          category,
          categoryColors[randomInt]
        );
      });

      const booksByCategories: any = {};
      uniqueCategoriesArray.map((category: string) => {
        const booksArray: object[] = [];
        loadedBooks.map((book: IBook) => {
          if (book.categories.includes(category)) {
            booksArray.push(book);
          }
        });
        booksByCategories[category] = booksArray;
      });
      // console.log('booksby categories ', booksByCategories)

      dispatch({
        type: SET_BOOKS,
        loadedBooks: loadedBooks,
        booksByCategories: booksByCategories,
        bookCategories: categoriesData,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const toggleBookFav = (id: string) => {
  return async (dispatch: any, getState: any) => {
    dispatch({ type: TOGGLE_FAV_BOOK, id: id });
  };
};
