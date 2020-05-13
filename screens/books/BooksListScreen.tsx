import React, { useState, useEffect, useCallback, memo } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  ListRenderItemInfo,
  Platform,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as booksActions from "../../store/actions/booksActions";
import * as authActions from "../../store/actions/authActions";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";

import { BOOKS, Ibook } from "../../data/book-data";
import { IBook, IBookState } from "../../types";
import BookItem from "../../components/BookItem";
import { Icon, Button } from "react-native-elements";

import Colors from "../../constants/Colors";

const BooksListScreen: React.FC = (props: any): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const books = useSelector<IBookState, IBook[]>(
    (state: any) => state.books.allBooks
  );

  const favBooks = useSelector<IBookState, IBook[]>(
    (state: any) => state.books.favBooks
  );

  const dispatch = useDispatch();

  const loadBooks = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(booksActions.fetchBooks());
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", loadBooks);

    return () => {
      unsubscribe();
    };
  }, [loadBooks]);

  useEffect(() => {
    setIsLoading(true);
    loadBooks().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadBooks]);

  useEffect(() => {
    if (error) {
      Alert.alert("An Error Occurred!", error, [
        { text: "Okay", onPress: () => authActions.clearErrorMessage() },
      ]);
    }
  }, [error]);

  const bookSelectHandler = (id: string): void => {
    const isFavorite = favBooks.some((book) => book.id === id);    
    props.navigation.navigate("BookDetails", {
      id: id,
      isFav: isFavorite,
    });
  };

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (!isLoading && books.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No books found. You can add some!</Text>
      </View>
    );
  }

  return (
    <FlatList
      onRefresh={loadBooks}
      refreshing={isRefreshing}
      data={books}
      numColumns={2}
      keyExtractor={(item: IBook): string => item.id}
      renderItem={(itemData: ListRenderItemInfo<IBook>) => (
        <BookItem
          id={itemData.item.id}
          title={itemData.item.title}
          image={itemData.item.thumbnailUrl}
          description={itemData.item.description}
          authors={itemData.item.authors}
          onSelect={bookSelectHandler}
        >
          <Button
            // icon={<Icon name="details" size={15} color="#fff" />}
            title="Details"
            type="solid"
            loading={false}
            raised={true}
            onPress={() => bookSelectHandler(itemData.item.id)}
            buttonStyle={{ backgroundColor: Colors.primary }}
          />
        </BookItem>
      )}
    />
  );
};

export const screenOptions = (navData:any) => {
  return {
    headerTitle: "All books",
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

export default memo(BooksListScreen);

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
});
