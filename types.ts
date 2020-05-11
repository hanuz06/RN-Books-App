export const SET_BOOKS = "SET_BOOKS";
export const UPDATE_BOOKS = "UPDATE_BOOKS";
export const CREATE_BOOK = "CREATE_BOOK";
export const AUTHENTICATE = "AUTHENTICATE";
export const LOGOUT = "LOGOUT";
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
export const CLEAR_ERROR_MESSAGE = "CLEAR_ERROR_MESSAGE";

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
  userId: null | string;
  token: null | string;
  errorMessage: null | string;
}

interface IAuthenticate {
  type: typeof AUTHENTICATE;
  token: null | string;
  userId: null | string;
}

interface ILogout {
  type: typeof LOGOUT;
}

interface ISetErrorMessage {
  type: typeof SET_ERROR_MESSAGE;
  errorMessage: null | string;
}

interface IClearErrorMessage {
  type: typeof CLEAR_ERROR_MESSAGE;
}

export type AuthActionsType =
  | IAuthenticate
  | ILogout
  | ISetErrorMessage
  | IClearErrorMessage;

export interface IFormInput {
  email: string;
  password: string;
}
