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
import * as authActions from "../store/actions/authActions";

import BooksListScreen, {
  screenOptions as booksListScreenOptions,
} from "../screens/books/BooksListScreen";
import BooksFavoritesScreen, {
  screenOptions as booksFavoritesScreenOption,
} from "../screens/books/BooksFavoritesScreen";
import BooksCategoriesScreen, {
  screenOptions as booksCategoriesScreenOption,
} from "../screens/books/BooksCategoriesScreen";
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

const CategoriesStackNavigator = createStackNavigator();

export const CategoriesNavigator = () => {
  return (
    <CategoriesStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <CategoriesStackNavigator.Screen
        name="Categories"
        component={BooksCategoriesScreen}
        options={booksCategoriesScreenOption}
      />
    </CategoriesStackNavigator.Navigator>
  );
};

const FavoritesStackNavigator = createStackNavigator();

export const FavoritesNavigator = () => {
  return (
    <FavoritesStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <FavoritesStackNavigator.Screen
        name="Favorites"
        component={BooksFavoritesScreen}
        options={booksFavoritesScreenOption}
      />
    </FavoritesStackNavigator.Navigator>
  );
};

const BookDrawerNavigator: any = createDrawerNavigator();

export const BooksAppNavigator: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <BookDrawerNavigator.Navigator
      drawerContent={(props: any) => {
        return (
          <View style={{ flex: 1, paddingTop: 60 }}>
            <SafeAreaView>
              <DrawerItemList {...props} />
              <Button
                title="Logout"
                color={Colors.primary}
                onPress={() => {
                  dispatch(authActions.logout());
                }}
              />
            </SafeAreaView>
          </View>
        );
      }}
      drawerContentOptions={{
        activeTintColor: Colors.primary,
      }}
      drawerStyle={{
        width: "50%",
      }}
    >
      <BookDrawerNavigator.Screen
        name="Book List"
        component={BooksNavigator}
        options={{
          drawerIcon: (props: any) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-list" : "ios-list"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
      <BookDrawerNavigator.Screen
        name="Book Categories"
        component={CategoriesNavigator}
        options={{
          drawerIcon: (props: any) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-book" : "ios-book"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
      <BookDrawerNavigator.Screen
        name="Book Favorites"
        component={FavoritesNavigator}
        options={{
          drawerIcon: (props: any) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-bookmark" : "ios-bookmark"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
    </BookDrawerNavigator.Navigator>
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
