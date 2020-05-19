import React, { useEffect, useState } from "react";
import { Platform, Alert } from "react-native";

import * as bookActions from "../../store/actions/booksActions";

import HeaderButton from "../../components/HeaderButton";
import BookDetailsItem from "../../components/BookDetailsItem";

import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { IBook, IBookState, IAuthState } from "../../types";

const BookDetailsScreen: React.FC = (props: any): JSX.Element => {
  const [error, setError] = useState<boolean>(false);

  const dispatch = useDispatch();

  const bookId: string = props.route.params.id;

  const userToken = useSelector<IAuthState, string>(
    (state: any) => state.auth.token
  );
  const selectedBook = useSelector<IBookState, IBook>((state: any) =>
    state.books.allBooks.find((book: IBook) => book.id === bookId)
  );
  const favBooks = useSelector<IBookState, IBook[]>(
    (state: any) => state.books.favBooks
  );

  const isFavorite: boolean = favBooks.some((book) => book.id === bookId);

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
              props.navigation.navigate("Auth");
            },
          },
          {
            text: "No",
            onPress: () => {
              setError(false);
              return;
            },
            style: "cancel",
          },
        ]
      );
    }
  }, [error]);

  useEffect(() => {
    const favStar = Platform.OS === "android" ? "md-star" : "ios-star";
    const noFavStar =
      Platform.OS === "android" ? "md-star-outline" : "ios-star-outline";

    props.navigation.setOptions({
      headerRight: (): JSX.Element => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Favorite"
            iconName={isFavorite ? favStar : noFavStar}
            onPress={() => {
              userToken
                ? dispatch(bookActions.toggleBookFav(bookId))
                : setError(true);
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [dispatch, isFavorite]);

  return <BookDetailsItem {...selectedBook} />;
};

export const screenOptions = (navData: any): any => {
  return {
    headerTitle: "Book Details",
    headerBackTitle: "All Books", // for iOS
    headerTruncatedBackTitle: "Back", // for iOS
  };
};

export default BookDetailsScreen;
