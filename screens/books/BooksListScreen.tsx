import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import BOOKS from "../../data/book-data.js";
import BookItem from "../../components/BookItem.js";

const BooksListScreen = (props: any) => {
  return (
    <FlatList
      data={BOOKS}
      keyExtractor={(item) => item.id}
      renderItem={(book) => <BookItem />}
    />
  );
};

export default BooksListScreen;

const styles = StyleSheet.create({});
