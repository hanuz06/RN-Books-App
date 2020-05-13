export const SET_BOOKS = "SET_BOOKS";
export const UPDATE_BOOK = "UPDATE_BOOK";
export const CREATE_BOOK = "CREATE_BOOK";
export const AUTHENTICATE = "AUTHENTICATE";
export const LOGOUT = "LOGOUT";
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
export const CLEAR_ERROR_MESSAGE = "CLEAR_ERROR_MESSAGE";
export const TOGGLE_FAV_BOOK = "TOGGLE_FAV_BOOK";
export const SET_LOADING = "SET_LOADING";

export interface IBook {
  id: string;
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
}

interface IToggleBookFav {
  type: typeof TOGGLE_FAV_BOOK;
  id: string;
}

export type BookActionsType = ISetBooks | IToggleBookFav;

export interface IBookState {
  allBooks: IBook[];
  favBooks: IBook[];
}

export interface IAuthState {
  userId: null | string;
  token: null | string;
  errorMessage: null | string;
  isLoading: boolean;
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

interface ISetLoading {
  type: typeof SET_LOADING;
}

export type AuthActionsType =
  | IAuthenticate
  | ILogout
  | ISetErrorMessage
  | IClearErrorMessage
  | ISetLoading;

export interface IFormInput {
  email: string;
  password: string;
}
