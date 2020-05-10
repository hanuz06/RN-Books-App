import { IAuthState, AuthActionsType, AUTHENTICATE, LOGOUT } from "../../types";

const initialState: IAuthState = {
  token: null,
  userId: null,
};

export default (state = initialState, action: AuthActionsType) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        token: action.token,
        userId: action.userId,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
