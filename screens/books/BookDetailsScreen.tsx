import React, { Children } from "react";
import { StyleSheet, Text, View } from "react-native";

const BookDetailsScreen: React.FC = (props:any):JSX.Element => {
  // console.log("ROUTE Value ", props);
  return (
    <View>
      <Text>THIS IS BOOK DETAILS SCREEN. ID is {props.route.params.id}</Text>
    </View>
  );
};

export default BookDetailsScreen;

const styles = StyleSheet.create({});