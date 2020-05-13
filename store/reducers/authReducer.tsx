import {
  IAuthState,
  AuthActionsType,
  AUTHENTICATE,
  LOGOUT,
  SET_ERROR_MESSAGE,
  CLEAR_ERROR_MESSAGE,
  SET_LOADING,
} from "../../types";

const initialState: IAuthState = {
  token: null,
  userId: null,
  errorMessage: null,
  isLoading: false,
};

export default (state = initialState, action: AuthActionsType) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        // ...state,
        token: action.token,
        userId: action.userId,
        isLoading: false
      };
    case LOGOUT:
      return initialState;
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.errorMessage,
        isLoading: false
      };
    case CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: null,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
