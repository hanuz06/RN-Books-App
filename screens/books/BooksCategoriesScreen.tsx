import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
} from "react-native";
import CategoryGridTile from "../../components/CategoryGridTile";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";

import Colors from "../../constants/Colors";
import { useSelector, useDispatch } from "react-redux";
import { IBookState } from "../../types";

const BooksCategoriesScreen: React.FC = (props: any) => {
  const categories = useSelector<IBookState, []>(
    (state: any) => state.books.booksCategories
  );
  // console.log('categories categories   ', categories)
  const renderGridItem = (itemData: any) => {
    return (
      <CategoryGridTile
        categoryName={itemData.item.categoryName}
        color={itemData.item.color}
        onSelect={(catName: string) => {
          console.log("catName catName catName", catName);
          props.navigation.navigate("ByCategoryBooks", {
            params: {
              categoryName: catName,
            },
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item: any) => item.id}
      data={categories}
      renderItem={renderGridItem}
      numColumns={2}
    />
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
    backgroundColor: "white",
    paddingTop: 20,
    // justifyContent: "center",
    // alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "700",
    paddingHorizontal: 20,
  },
  horText: {
    height: 130,
    marginTop: 20,
  },
});
