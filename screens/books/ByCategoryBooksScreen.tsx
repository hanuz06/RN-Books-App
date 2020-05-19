import React from "react";
import { StyleSheet, FlatList, ListRenderItemInfo } from "react-native";

import { useSelector } from "react-redux";

import { IBookState, IBook } from "../../types";
import FavCategoryBookItem from "../../components/FavCategoryBookItem";

interface Props {
  route: {
    params: {
      params: {
        categoryName: string;
      };
    };
  };
  navigation: any;
}

const ByCategoriesBooksScreen: React.FC<Props> = (props): JSX.Element => {
  const categoryName: string = props.route.params.params.categoryName;
  const AllBooksByCategories: any = useSelector<IBookState, {}>(
    (state: any) => state.books.booksByCategories
  );

  const favBooks = useSelector<IBookState, IBook[]>(
    (state: any) => state.books.favBooks
  );

  const booksByCategory: any[] = [...AllBooksByCategories[categoryName]];

  const bookSelectHandler = (id: string): void => {
    const isFavorite = favBooks.some((book) => book.id === id);
    props.navigation.navigate("BookDetails", {
      id: id,
      isFav: isFavorite,
    });
  };

  return (
    <FlatList
      data={booksByCategory}
      keyExtractor={(item: IBook): string => item.id}
      renderItem={(itemData: ListRenderItemInfo<IBook>): JSX.Element => (
        <FavCategoryBookItem
          id={itemData.item.id}
          title={itemData.item.title}
          image={itemData.item.thumbnailUrl}
          description={itemData.item.description}
          publishedDate={itemData.item.publishedDate}
          authors={itemData.item.authors}
          categories={itemData.item.categories}
          onSelect={bookSelectHandler}
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
