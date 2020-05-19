import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  Platform,
  View,
  FlatList,
  ListRenderItemInfo,
  ActivityIndicator,
  Alert,
} from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";
import FavCategoryBookItem from "../../components/FavCategoryBookItem";

import Colors from "../../constants/Colors";

import { useSelector, useDispatch } from "react-redux";
import * as bookActions from "../../store/actions/booksActions";
import { IBookState, IBook, IAuthState } from "../../types";

const BooksFavoritesScreen: React.FC = ({ navigation }: any): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const dispatch = useDispatch();

  const favBooks = useSelector<IBookState, IBook[]>(
    (state: any) => state.books.favBooks
  );

  const userToken = useSelector<IAuthState, string>(
    (state: any) => state.auth.token
  );

  const loadFavBooks = useCallback(async () => {
    setError(false);
    setIsRefreshing(true);
    try {
      await dispatch(bookActions.fetchFavBooks());
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", loadFavBooks);

    return () => {
      unsubscribe();
    };
  }, [loadFavBooks]);

  useEffect(() => {
    !userToken && setError(true);
    setIsLoading(true);
    loadFavBooks().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadFavBooks]);

  const bookSelectHandler = (id: string): void => {
    navigation.navigate("BookDetails", {
      id: id,
    });
  };

  useEffect(() => {
    if (error) {
      Alert.alert(
        "You need to login or signup first!",
        "Do you want to login or signup?",
        [
          {
            text: "Yes",
            onPress: () => {
              setError(false);
              navigation.navigate("Auth");
            },
          },
          {
            text: "No",
            onPress: () => {
              setError(false);
              navigation.navigate("BooksList");
              return;
            },
            style: "cancel",
          },
        ]
      );
    }
  }, [error]);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (userToken && !isLoading && favBooks.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No favorite books found. You can add some!</Text>
      </View>
    );
  }

  return (
    <FlatList
      onRefresh={loadFavBooks}
      refreshing={isRefreshing}
      data={favBooks}
      keyExtractor={(item: IBook): string => item.id}
      renderItem={(itemData: ListRenderItemInfo<IBook>): JSX.Element => (
        <FavCategoryBookItem
          id={itemData.item.id}
          title={itemData.item.title}
          image={itemData.item.thumbnailUrl}
          publishedDate={itemData.item.publishedDate}
          description={itemData.item.description}
          authors={itemData.item.authors}
          categories={itemData.item.categories}
          onSelect={() => bookSelectHandler(itemData.item.id)}
        />
      )}
    />
  );
};

export const screenOptions = (navData: any) => {
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
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
