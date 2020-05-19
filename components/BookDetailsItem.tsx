import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Image } from "react-native-elements";

import moment from "moment";

interface Props<T> {
  title: T;
  pageCount: number;
  publishedDate: T;
  thumbnailUrl: T;
  description: T;
  status: T;
  authors: [T];
  categories: [T];
}

const BookDetailsItem: React.FC<Props<string>> = ({
  thumbnailUrl,
  title,
  description,
  authors,
  pageCount,
  categories,
  status,
  publishedDate,
}): JSX.Element => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: thumbnailUrl }}
              style={styles.image}
              PlaceholderContent={<ActivityIndicator />}
            />
          </View>
          <View style={styles.details}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>{description}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                <Text style={{ ...styles.text, ...styles.boldStyle }}>
                  Authors:{" "}
                </Text>
                {authors}
              </Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                <Text style={{ ...styles.text, ...styles.boldStyle }}>
                  Pages:{" "}
                </Text>
                {pageCount}
              </Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                <Text style={{ ...styles.text, ...styles.boldStyle }}>
                  Categories:{" "}
                </Text>
                {categories}
              </Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                <Text style={{ ...styles.text, ...styles.boldStyle }}>
                  Status:{" "}
                </Text>
                {status}
              </Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                <Text style={{ ...styles.text, ...styles.boldStyle }}>
                  Date published:{" "}
                </Text>
                {moment(publishedDate).format("DD MMM YYYY")}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default BookDetailsItem;

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
