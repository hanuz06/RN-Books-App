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
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { KeyboardAwareFlatList } from "react-native-keyboard-aware-scroll-view";
import { useSelector, useDispatch } from "react-redux";
import * as booksActions from "../../store/actions/booksActions";
import * as authActions from "../../store/actions/authActions";
import { YellowBox } from 'react-native';

   


import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";

import { BOOKS, Ibook } from "../../data/book-data";
import { IBook, IBookState } from "../../types";
import BookItem from "../../components/BookItem";
import { Icon, Button, SearchBar } from "react-native-elements";

import Colors from "../../constants/Colors";

const BooksListScreen: React.FC = (props: any): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();
  const [select, setSelect] = useState<string>("");
  const [bookList, setBookList] = useState<IBook[]>([]);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const searchRef: any = React.createRef();

  let allBooks: IBook[];

  allBooks = useSelector<IBookState, IBook[]>(
    (state: any) => state.books.allBooks
  );
  
  useEffect(() => {
    setBookList(allBooks);
  }, [allBooks]);

  const favBooks = useSelector<IBookState, IBook[]>(
    (state: any) => state.books.favBooks
  );

  const dispatch = useDispatch();

  const searchFilterFunction = (text: string): void => {
    const filtered: IBook[] = allBooks.filter(
      (book) => book.title.toLowerCase().search(text.toLowerCase()) !== -1
    );
    filtered.length !== 0 ? setBookList(filtered) : setBookList(allBooks);
    setSelect(text);
  };

  const loadBooks = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(booksActions.fetchBooks());      
      YellowBox.ignoreWarnings(['Setting a timer']);      
    } catch (err) {
      setError(err.message);      
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <SearchBar
          ref={searchRef}
          platform={Platform.OS === "android" ? "android" : "ios"}
          containerStyle={{
            height: 35,
            marginHorizontal: 10,
            width: 180,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
          inputContainerStyle={{
            width: 180,
            // borderColor: "blue",
            // borderWidth: 2,
          }}
          inputStyle={{
            // borderColor: "green",
            // borderWidth: 3,
            alignItems: "center",
            justifyContent: "center",
          }}
          value={select}
          onBlur={() => Keyboard.dismiss()}
          onChangeText={(text: string) => searchFilterFunction(text)}
        />
      ),
    });
  }, [select]);

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
        { text: "Okay", onPress: () => setError(null) },
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

  if (!isLoading && bookList.length === 0) {
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
      data={bookList}
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
            // onPress={() => dispatch(booksActions.searchBook())}
            buttonStyle={styles.buttonStyle}
          />
        </BookItem>
      )}
    />
  );
};

export const screenOptions = (navData: any) => {
  return {
    headerTitle: "All books",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            Keyboard.dismiss();
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default memo(BooksListScreen);

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: Colors.primary,
    borderRadius: 45,
    width: 90,
    marginTop: 5,
  },
});
