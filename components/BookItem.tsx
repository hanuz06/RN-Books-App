import React from "react";
import {
  View,
  Text,
  Image, 
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Card from "./Card";

const BookItem = (props: any) => {
  let TouchableCmp: any = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <Card>
      <View>
        <TouchableCmp useForeground>
          <View>
            <View>{/* <Image  /> */}</View>

            <View>{props.children}</View>
          </View>
        </TouchableCmp>
      </View>
    </>
  );
};

export default BookItem;

const styles = StyleSheet.create({});
