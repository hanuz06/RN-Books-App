import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { BooksNavigator, AuthNavigator } from "./BooksNavigator";

const AppNavigator = (props: any): JSX.Element => {
  const isAuth = useSelector<any>((state) => !!state.auth.token);

  return (
    <NavigationContainer>
      {!isAuth && <AuthNavigator />}
      {isAuth && <BooksNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
