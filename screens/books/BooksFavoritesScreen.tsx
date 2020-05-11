import React from "react";
import { StyleSheet, Text, Platform, View } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";

import Colors from "../../constants/Colors";
import { useSelector, useDispatch } from "react-redux";


const BooksFavoritesScreen: React.FC = (props: any) => {
  return (
    <View style={styles.mainContainer}>
      <Text>BOOK FAVORITES</Text>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "Favorite books",
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

export default BooksFavoritesScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
