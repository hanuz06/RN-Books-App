import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  Platform,
} from "react-native";
import { Image, Button } from "react-native-elements";
import * as bookActions from "../../store/actions/booksActions";

import HeaderButton from "../../components/HeaderButton";

import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { IBook, IBookState } from "../../types";
import moment from "moment";

import Colors from "../../constants/Colors";

const BookDetailsScreen: React.FC = (props: any): JSX.Element => {
  let isFavorite: boolean;

  const bookId: string = props.route.params.id;
  isFavorite = props.route.params.isFav;

  const selectedBook: any = useSelector<any>((state) =>
    state.books.allBooks.find((book: IBook) => book.id === bookId)
  );

  const favBooks = useSelector<IBookState, IBook[]>(
    (state: any) => state.books.favBooks
  );

  isFavorite = favBooks.some((book) => book.id === bookId);

  const dispatch = useDispatch();

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
              dispatch(bookActions.toggleBookFav(bookId));
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [dispatch, isFavorite]);

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: selectedBook.thumbnailUrl }}
            style={styles.image}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
        <View style={styles.details}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{selectedBook.title}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{selectedBook.description}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              <Text style={{ ...styles.text, ...styles.boldStyle }}>
                Authors:{" "}
              </Text>
              {selectedBook.authors}
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              <Text style={{ ...styles.text, ...styles.boldStyle }}>
                Pages:{" "}
              </Text>
              {selectedBook.pageCount}
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              <Text style={{ ...styles.text, ...styles.boldStyle }}>
                Categories:{" "}
              </Text>
              {selectedBook.categories}
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              <Text style={{ ...styles.text, ...styles.boldStyle }}>
                Status:{" "}
              </Text>
              {selectedBook.status}
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              <Text style={{ ...styles.text, ...styles.boldStyle }}>
                Date published:{" "}
              </Text>
              {moment(selectedBook.publishedDate).format("DD MMM YYYY")}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export const screenOptions = (navData: any): any => {
  return {
    headerTitle: "Book Details",headerBackTitle: 'All Books', // for iOS
    headerTruncatedBackTitle: 'Back' // for iOS
  };
};

export default BookDetailsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: Dimensions.get("screen").height,
    maxWidth: 450,
    padding: 5,
    alignItems: "center",
  },
  details: {
    width: "90%",
  },
  imageContainer: {
    width: "100%",
    height: "50%",
    paddingBottom: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  titleContainer: {
    alignItems: "center",
    paddingVertical: 5,
  },
  title: {
    fontSize: 20,
    fontFamily: "roboto-bold",
  },
  textContainer: {
    flexDirection: "row",
    paddingVertical: 5,
    width: "100%",
  },
  text: {
    fontSize: 18,
    fontFamily: "roboto-regular",
  },
  boldStyle: {
    fontFamily: "roboto-bold",
  },
});
