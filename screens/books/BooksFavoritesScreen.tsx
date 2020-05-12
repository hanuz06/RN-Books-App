import React, { useState } from "react";
import { StyleSheet, Text, Platform, View, FlatList } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";

import Colors from "../../constants/Colors";
import { useSelector, useDispatch } from "react-redux";
import * as bookActions from "../../store/actions/booksActions";
import { IBookState, IBook } from "../../types";
import FavBookItems from "../../components/FavBookItems";

interface Props {
  props: {
    onSelect: any;
    id: string;
    image: string;
    description: string;
    authors: string[];
    children: any;
  };
}

const BooksFavoritesScreen: React.FC<Props> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const favBooks = useSelector<IBookState, IBook[]>(
    (state: any) => state.books.favBooks
  );

  if (!favBooks) {
    <View style={styles.mainContainer}>
      <Text>BOOK FAVORITES</Text>
    </View>;
  }

  return (
    <FlatList
      // onRefresh={loadBooks}
      // refreshing={isRefreshing}
      data={favBooks}
      keyExtractor={(item: IBook): string => item.id}
      renderItem={(itemData) => (
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

export const screenOptions = (navData:any) => {
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
    justifyContent: "center",
    alignItems: "center",
  },
});
