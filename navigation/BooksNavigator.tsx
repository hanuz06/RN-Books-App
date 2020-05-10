import React from "react";
import { Platform, SafeAreaView, Button, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import Colors from "../constants/Colors";

import BooksListScreen, {
  screenOptions as booksListScreenOptions,
} from "../screens/books/BooksListScreen";
import BooksFavoritesScreen from "../screens/books/BooksFavoritesScreen";
import BooksCategoriesScreen from "../screens/books/BooksCategoriesScreen";
import BookDetailsScreen, {
  screenOptions as bookDetailsScreenOptions,
} from "../screens/books/BookDetailsScreen";
import AuthScreen, {
  screenOptions as AuthScreenOptions,
} from "../screens/users/AuthScreen";
import RegistrationScreen from "../screens/users/RegistrationScreen";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const BooksStackNavigator = createStackNavigator();

export const BooksNavigator = () => {
  return (
    <BooksStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <BooksStackNavigator.Screen
        name="BooksList"
        component={BooksListScreen}
        options={booksListScreenOptions}
      />
      <BooksStackNavigator.Screen
        name="BookDetails"
        component={BookDetailsScreen}
        options={bookDetailsScreenOptions}
      />
    </BooksStackNavigator.Navigator>
  );
};

const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AuthStackNavigator.Screen
        name="Auth"
        component={AuthScreen}
        options={AuthScreenOptions}
      />
    </AuthStackNavigator.Navigator>
  );
};

export default BooksNavigator;

// const styles = StyleSheet.create({});
