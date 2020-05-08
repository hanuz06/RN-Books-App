export const SET_BOOKS = "SET_BOOKS";
export const UPDATE_BOOKS = "UPDATE_BOOKS";
export const CREATE_BOOK = "CREATE_BOOK";

export interface IBook {
  id: string;
  title: string;
  ownerId: string;
  pageCount: number;
  publishedDate: string;
  thumbnailUrl: string;
  description: string;
  status: string;
  authors: [string];
  categories: [string];
}

interface ISetBooks {
  type: typeof SET_BOOKS;
  loadedBooks: [];
}

export type BookActionsType = ISetBooks;

export interface IBookState {
  allBooks: IBook[];
}
