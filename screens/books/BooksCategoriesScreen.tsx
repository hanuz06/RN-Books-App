import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";

import Colors from "../../constants/Colors";
import { useSelector, useDispatch } from "react-redux";

const BooksCategoriesScreen: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>BOOK CATEGORIES</Text>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "Book Categories",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default BooksCategoriesScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
