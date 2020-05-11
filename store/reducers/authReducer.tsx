import {
  IAuthState,
  AuthActionsType,
  AUTHENTICATE,
  LOGOUT,
  SET_ERROR_MESSAGE,
  CLEAR_ERROR_MESSAGE,
} from "../../types";

const initialState: IAuthState = {
  token: null,
  userId: null,
  errorMessage: null,
};

export default (state = initialState, action: AuthActionsType) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        // ...state,
        token: action.token,
        userId: action.userId,        
      };
    case LOGOUT:
      return initialState;
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    case CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: null,
      };
    default:
      return state;
  }
};
