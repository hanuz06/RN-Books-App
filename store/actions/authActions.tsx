import {
  AUTHENTICATE,
  LOGOUT,
  SET_ERROR_MESSAGE,
  CLEAR_ERROR_MESSAGE,
} from "../../types";
import { AsyncStorage } from "react-native";
import API_KEY from "../../env.env";

let timer: any;

export const setErrorMessage = (message: string) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_ERROR_MESSAGE,
      errorMessage: message,
    });
  };
};

export const clearErrorMessage = () => {
  return (dispatch: any) => {
    dispatch({
      type: CLEAR_ERROR_MESSAGE,
    });
  };
};

export const authenticate = (
  userId: string,
  token: string,
  expiryTime: number
) => {
  return async (dispatch: any) => {
    const reply = await dispatch({
      type: AUTHENTICATE,
      userId: userId,
      token: token,
    });
    dispatch(setLogoutTimer(expiryTime));
  };
};

export const signup = (email: string, password: string) => {
  return async (dispatch: any) => {
    const res: any = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    if (!res.ok) {
      const errorResData = await res.json();
      const errorId = errorResData.error;
      let message = "Something went wrong!";
      if (errorId.message === "EMAIL_EXISTS") {
        message = "This email exists already!";
      }
      throw new Error(message);
    }

    const resData = await res.json();

    dispatch(
      authenticate(
        resData.localId,
        resData.idToken,
        parseInt(resData.expiresIn) * 1000
      )
    );
    const expirationDate = new Date(
      new Date().getTime() + parseInt(resData.expiresIn) * 1000
    );

    saveDataToStorage(resData.idToken, resData.localId, expirationDate);
  };
};

export const login = (email: string, password: string) => {
  return async (dispatch: any) => {
    try {
      const res: any = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
        }
      );
      if (!res.ok) {
        const errorResData = await res.json();
        const errorId = errorResData.error.message;
        let message = "Something went wrong!";
        if (errorId === "EMAIL_NOT_FOUND") {
          message = "This email could not be found!";
        } else if (errorId === "INVALID_PASSWORD") {
          message = "This password is not valid!";
        }
        throw new Error(message);
      }

      const resData = await res.json();

      dispatch(
        authenticate(
          resData.localId,
          resData.idToken,
          parseInt(resData.expiresIn) * 1000
        )
      );
      const expirationDate = new Date(
        new Date().getTime() + parseInt(resData.expiresIn) * 1000
      );
      saveDataToStorage(resData.idToken, resData.localId, expirationDate);
    } catch (err) {
      dispatch(setErrorMessage(err.message));
      // throw err;
    }
  };
};

export const logout = () => {
  clearLogoutTimer();
  AsyncStorage.removeItem("userData");
  return { type: LOGOUT };
};

const clearLogoutTimer = () => {
  if (timer) {
    clearTimeout(timer);
  }
};

const setLogoutTimer = (expirationTime: number) => {
  return (dispatch: any) => {
    timer = setTimeout(() => {
      dispatch(logout());     
    }, expirationTime);    
  };
};

const saveDataToStorage = (
  token: string,
  userId: string,
  expirationDate: any
) => {
  AsyncStorage.setItem(
    "userData",
    JSON.stringify({
      token: token,
      userId: userId,
      expiryDate: expirationDate.toISOString(),
    })
  );
};
