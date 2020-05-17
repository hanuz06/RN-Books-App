import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Platform,
  View,
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
} from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";

import Colors from "../../constants/Colors";
import { useSelector, useDispatch } from "react-redux";
import * as bookActions from "../../store/actions/booksActions";
import { IBookState, IBook } from "../../types";
import FavBookItems from "../../components/FavBookItems";

type Props = {
  props: {
    onSelect: () => {};
    id: string;
    title: string;
    image: string;
    description: string;
    authors: string[];
    categories: string[];
    route: {
      params: string;
    };
  };
};

const ByCategoriesBooksScreen: React.FC<any> = (props: any): JSX.Element => {
  const categoryName: string = props.route.params.params.categoryName;
  const AllBooksByCategories: any = useSelector<IBookState, {}>(
    (state: any) => state.books.booksByCategories
  );
 
  const booksByCategory:any[] = [...AllBooksByCategories[categoryName]];

  return (
    <FlatList      
      data={booksByCategory}
      keyExtractor={(item: IBook): string => item.id}
      renderItem={(itemData: ListRenderItemInfo<IBook>): JSX.Element => (
        <FavBookItems
          id={itemData.item.id}
          title={itemData.item.title}
          image={itemData.item.thumbnailUrl}
          description={itemData.item.description}
          authors={itemData.item.authors}
          categories={itemData.item.categories}
          onSelect={() => {}}
        />
      )}
    />
  );
};

export const screenOptions = (navData: any) => {
  return {
    headerTitle: navData.route.params.params.categoryName,
  };
};

export default ByCategoriesBooksScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
