import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { BooksNavigator, AuthNavigator } from "./BooksNavigator";

const AppNavigator = (props: any): JSX.Element => {
  return (
    <NavigationContainer>
      <BooksNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
