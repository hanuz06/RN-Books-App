import {
  SET_BOOKS,
  ADD_FAV_BOOK,
  SET_FAV_BOOKS,
  IBook,
  REMOVE_FAV_BOOK,
} from "../../types";
import Category from "../../models/category";
import { categoryColors } from "../../constants/Colors";

export const fetchBooks = () => {
  return async (dispatch: any, getState: any) => {
    try {
      const response = await fetch(
        `https://react-native-books-app.firebaseio.com/books.json`
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

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

export const fetchFavBooks = () => {
  return async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    const token = getState().auth.token;

    try {
      const favBooks = await fetch(
        `https://react-native-books-app.firebaseio.com/favoriteBooks/${userId}.json?auth=${token}`
      );

      if (!favBooks.ok) {
        throw new Error("Something went wrong!");
      }

      const allFavBooks = await favBooks.json();

      const favBooksArray: any[] = [];

      // make an array of favorite books and add Firebase id as fbId key.
      for (const favBook in allFavBooks) {
        allFavBooks[favBook].fbId = favBook;
        favBooksArray.push(allFavBooks[favBook]);
      }

      dispatch({
        type: SET_FAV_BOOKS,
        favBooks: favBooksArray,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const toggleBookFav = (id: string) => {
  return async (dispatch: any, getState: any) => {
    const existingIndex: number = await getState().books.favBooks.findIndex(
      (book: IBook) => book.id === id
    );

    const token = getState().auth.token;
    const userId = getState().auth.userId;

    if (existingIndex === -1) {
      const book: any = await getState().books.allBooks.find(
        (book: IBook) => book.id === id
      );

      const res = await fetch(
        `https://react-native-books-app.firebaseio.com/favoriteBooks/${userId}.json?auth=${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ownerId: userId,
            id: book.id,
            title: book.title,
            pageCount: book.pageCount,
            publishedDate: book.publishedDate,
            thumbnailUrl: book.thumbnailUrl,
            description: book.description,
            status: book.status,
            authors: book.authors,
            categories: book.categories,
          }),
        }
      );

      if (!res.ok) {
        throw new Error(
          "Failed to add favorite book to Firebase. Something went wrong!"
        );
      }

      const resData = await res.json();
      book.fbId = resData.name;

      dispatch({ type: ADD_FAV_BOOK, addedBook: book });
    } else {
      const favBook: any = await getState().books.favBooks.find(
        (book: IBook) => book.id === id
      );

      const res = await fetch(
        `https://react-native-books-app.firebaseio.com/favoriteBooks/${userId}/${favBook.fbId}.json?auth=${token}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        throw new Error(
          "Failed to delete favorite book to Firebase. Something went wrong!"
        );
      }
      dispatch({ type: REMOVE_FAV_BOOK, existingIndex: existingIndex });
    }
  };
};
