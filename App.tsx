import React, { useState } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import ReduxThunk from "redux-thunk";
import firebase from "firebase";

import authReducer from "./store/reducers/authReducer";
import booksReducer from "./store/reducers/booksReducer";
import AppNavigator from "./navigation/AppNavigator";

const rootReducer = combineReducers({
  auth: authReducer,
  books: booksReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App(): JSX.Element {
  const [fontLoaded, setFontLoaded] = useState<boolean>(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD7se34VVR1B9NGPNaNQTilS5ttlD3X1i4",
    authDomain: "react-native-books-app.firebaseapp.com",
    databaseURL: "https://react-native-books-app.firebaseio.com",
    projectId: "react-native-books-app",
    storageBucket: "react-native-books-app.appspot.com",
    messagingSenderId: "1001105405197",
    appId: "1:1001105405197:web:5831b6ddfdede2c1c86c44",
    measurementId: "G-EG5DY0SZXN"
  };
  // Initialize Firebase 
  firebase.initializeApp(firebaseConfig);
  
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
