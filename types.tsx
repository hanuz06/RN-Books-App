export const SET_BOOKS = "SET_BOOKS";
export const UPDATE_BOOKS = "UPDATE_BOOKS";
export const CREATE_BOOK = "CREATE_BOOK";
export const AUTHENTICATE = "AUTHENTICATE";
export const LOGOUT = "LOGOUT";

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

export interface IAuthState {
  token: null | string;
  userId: null | string;
}

interface IAuthenticate {
  type: typeof AUTHENTICATE;
  token: null | string;
  userId: null | string;
}

interface ILogout {
  type: typeof LOGOUT;  
}

export type AuthActionsType = IAuthenticate | ILogout;

export interface IFormInput {
  email: string;
  password: string;
}
