import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import {
  BooksNavigator,
  AuthNavigator,
  BooksAppNavigator,
  MainBooksNavigator,
} from "./BooksNavigator";

const AppNavigator = (): JSX.Element => {
  const isAuth = useSelector<any>((state) => !!state.auth.token);
    
  return (
    <NavigationContainer>
      {/* {!isAuth && <AuthNavigator />} */}
      {/* {isAuth && <BooksAppNavigator />} */}
      <BooksAppNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
