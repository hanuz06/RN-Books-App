import React from "react";
import { Platform, SafeAreaView, View, Text, Easing } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Button } from "react-native-elements";

import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

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
import ByCategoryBooksScreen, {
  screenOptions as ByCategoryBooksScreenOptions
} from '../screens/books/ByCategoryBooksScreen'
import BookDetailsScreen, {
  screenOptions as bookDetailsScreenOptions,
} from "../screens/books/BookDetailsScreen";
import AuthScreen, {
  screenOptions as AuthScreenOptions,
} from "../screens/users/AuthScreen";
import RegistrationScreen from "../screens/users/RegistrationScreen";
import { color } from "react-native-reanimated";

// const config: any = {
//   animation: "spring",
//   config: {
//     stiffness: 1000,
//     damping: 50,
//     mass: 3,
//     overshootClamping: false,
//     restDisplacementThreshold: 0.01,
//     restSpeedThreshold: 0.01,
//   },
// };

const openCloseConfig: any = {
  animation: "timing",
  config: {
    duration: 300,
    easing: Easing.linear,
  },
};

const defaultNavOptions: any = {
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
  gestureEnabled: true,
  gestureDirection: "horizontal",
  ...TransitionPresets.SlideFromRightIOS,
  // CardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS,
  transitionSpec: {
    open: openCloseConfig,
    close: openCloseConfig,
  },
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

const BooksStackNavigator = createStackNavigator();

export const BooksNavigator = () => {
  return (
    <BooksStackNavigator.Navigator
      screenOptions={defaultNavOptions}
      // mode="modal"
      headerMode="float"
      // animation="fade"
    >
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
      <BooksStackNavigator.Screen
        name="Auth"
        component={AuthScreen}
        options={AuthScreenOptions}
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
      <CategoriesStackNavigator.Screen
        name="ByCategoryBooks"
        component={ByCategoryBooksScreen}
        options={ByCategoryBooksScreenOptions}
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

  const userEmail = useSelector<any, string>((state) => state.auth.email);

  return (
    <BookDrawerNavigator.Navigator 
      drawerContent={(props: any) => {
        return (
          <View style={{ flex: 1, paddingTop: 60 }}>
            <SafeAreaView>
              <View
                style={{
                  height: 45,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{fontSize: 16}}>{userEmail && userEmail}</Text>
              </View>
              <DrawerItemList {...props} />
              <Button
                title="Login / Signup"
                buttonStyle={{
                  backgroundColor: Colors.primary,
                  marginVertical: 5,
                }}
                disabled={!!userEmail}
                onPress={() => {
                  props.navigation.navigate("Auth");
                }}
              />
              <Button
                title="Logout"
                buttonStyle={{
                  backgroundColor: Colors.primary,
                  marginVertical: 5,
                }}
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
          )         
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
