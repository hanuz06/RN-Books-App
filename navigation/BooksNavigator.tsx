import React from "react";
import { Platform, SafeAreaView, Button, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import BooksListScreen from "../screens/books/BooksListScreen";
import BooksFavoritesScreen from "../screens/books/BooksFavoritesScreen";
import BooksCategoriesScreen from "../screens/books/BooksCategoriesScreen";
import BookDetailsScreen from "../screens/books/BookDetailsScreen";
import LoginScreen from "../screens/users/LoginScreen";
import RegistrationScreen from "../screens/users/RegistrationScreen";
import Colors from "../constants/Colors";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: "roboto-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "roboto-regular",
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
        // options={productsOverviewScreenOptions}
      />
      <BooksStackNavigator.Screen
        name="BookDetails"
        component={BookDetailsScreen}
        // options={productsOverviewScreenOptions}
      />
    </BooksStackNavigator.Navigator>
  );
};

export default BooksNavigator;

// const styles = StyleSheet.create({});
