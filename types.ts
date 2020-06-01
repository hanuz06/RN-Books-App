export const SET_BOOKS = "SET_BOOKS";
export const SET_FAV_BOOKS = "SET_FAV_BOOKS";
export const UPDATE_BOOK = "UPDATE_BOOK";
export const CREATE_BOOK = "CREATE_BOOK";
export const AUTHENTICATE = "AUTHENTICATE";
export const LOGOUT = "LOGOUT";
export const ADD_FAV_BOOK = "ADD_FAV_BOOK";
export const REMOVE_FAV_BOOK = "REMOVE_FAV_BOOK";

export interface IBook {
  id: string;
  fbId?: string;
  title: string;
  ownerId?: string;
  pageCount: number;
  publishedDate: string;
  thumbnailUrl: string;
  description: string;
  status: string;
  authors: [string];
  categories: [string];
}

interface IFavBooks {
  id: string;
}

interface ISetBooks {
  type: typeof SET_BOOKS;
  loadedBooks: [];
  booksByCategories: {};
  bookCategories: [];
}

interface IAddFavBook {
  type: typeof ADD_FAV_BOOK;
  addedBook: any;
}

interface IRemoveFavBook {
  type: typeof REMOVE_FAV_BOOK;
  existingIndex: number;
}

interface ISetFavBooks {
  type: typeof SET_FAV_BOOKS;
  favBooks: [];
}

interface ILogout {
  type: typeof LOGOUT;
}

export type BookActionsType =
  | ISetBooks
  | IAddFavBook
  | ILogout
  | ISetFavBooks  
  | IRemoveFavBook;

export interface IBookState {
  allBooks: IBook[];
  favBooks: IBook[];
  booksByCategories: {};
  bookCategories: [string];
}

export interface IAuthState {
  userId: null | string;
  token: null | string;
  email: string;
}

interface IAuthenticate {
  type: typeof AUTHENTICATE;
  token: null | string;
  userId: null | string;
  email: string;
}

export type AuthActionsType = IAuthenticate | ILogout ;

export interface IFormInput {
  email: string;
  password: string;
}
