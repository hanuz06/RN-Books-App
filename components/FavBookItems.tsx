import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  Dimensions,
  ActivityIndicator,
} from "react-native";

import { Image, Card } from "react-native-elements";
import moment from "moment";

const FavBookItems: React.FC = (props: any): JSX.Element => {
  let TouchableCmp: any = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.touchable}>
      <TouchableCmp onPress={() => props.onSelect(props.id)} useForeground>
        <View style={styles.mainContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: props.image }}
              PlaceholderContent={<ActivityIndicator />}
              resizeMode="contain"
            />
          </View>
          <View style={styles.details}>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.title}>{props.title}</Text>
            </View>
            <Text numberOfLines={6} style={styles.text}>
              {props.description}
            </Text>
            <Text numberOfLines={6} style={styles.text}>
              <Text style={styles.sectionTitle}>Authors: </Text>{" "}
              {props.authors.join(", ")}
            </Text>
            <Text numberOfLines={6} style={styles.text}>
              <Text style={styles.sectionTitle}>Categories: </Text>
              {props.categories.join(", ")}
            </Text>
            <Text numberOfLines={6} style={styles.text}>
              <Text style={styles.sectionTitle}>Date published: </Text>{" "}
              {moment(props.publishedDate).format("DD MMM YYYY")}
            </Text>
          </View>
          <View style={styles.actions}>{props.children}</View>
        </View>
      </TouchableCmp>
    </View>
  );
};

export default FavBookItems;

const styles = StyleSheet.create({
  touchable: {
    overflow: "hidden",
    borderRadius: 10,
    height: 300,
    maxWidth: 450,
    margin: 5,
    borderColor: "red",
    borderWidth: 1,
    // justifyContent: "center",
    // alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white",
  },
  mainContainer: {
    flexDirection: "row",
  },
  imageContainer: {
    width: "40%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  details: {
    width: "60%",
    padding: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: "green",
    borderWidth: 2,
  },
  title: {
    fontFamily: "roboto-bold",
    fontSize: 18,
  },
  text: {
    fontFamily: "roboto-regular",
    fontSize: 16,
    paddingVertical: 3,
  },
  actions: {
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {
    fontWeight: "bold",
  },
});
