import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { BOOKS, Ibook } from "../../data/book-data.ts";
import BookItem from "../../components/BookItem";
import { Icon, Button } from "react-native-elements";

const BooksListScreen = (props: any): JSX.Element => {
  const bookSelectHandler = (id: string): void => {
    console.log("book selected");
    // props.navigation.navigate("BookDetails", {
    //   id: id,
    // });
  };

  return (
    <FlatList
      data={BOOKS}
      numColumns={2}
      keyExtractor={(item: Ibook): string => item.id}
      renderItem={(itemData) => (
        <BookItem
          id={itemData.item.id}
          title={itemData.item.title}
          image={itemData.item.thumbnailUrl}
          shortDescription={itemData.item.shortDescription}
          authors={itemData.item.authors}
          onSelect={bookSelectHandler}
        >
          <Button
            icon={<Icon name="details" size={15} color="blue" />}
            title="Details"
            type="outline"
            loading={false}
            raised={true}
            onPress={()=>console.log('Press button')}
          />         
        </BookItem>
      )}
    />
  );
};

export default BooksListScreen;

const styles = StyleSheet.create({});
