import React, { memo } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  ActivityIndicator,
} from "react-native";

import { Image, Button } from "react-native-elements";
import moment from "moment";

import Colors from "../constants/Colors";

interface Props {
  onSelect: (id: string) => void;
  id: string;
  title: string;
  image: string;
  description: string;
  authors: string[];
  categories: string[];
  publishedDate: string;
  children?: any;
}

const FavCategoryBookItem: React.FC<Props> = ({
  id,
  title,
  image,
  description,
  publishedDate,
  children,
  authors,
  categories,
  onSelect,
}): JSX.Element => {
  let TouchableCmp: any = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.touchable}>
      <TouchableCmp onPress={() => onSelect(id)} useForeground>
        <View style={styles.mainContainer}>
          <View style={styles.imageButtonContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{ uri: image }}
                PlaceholderContent={<ActivityIndicator />}
                resizeMode="contain"
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="Details"
                type="solid"
                loading={false}
                raised={true}
                onPress={() => onSelect(id)}
                // onPress={() => dispatch(booksActions.searchBook())}
                buttonStyle={styles.buttonStyle}
              />
            </View>
          </View>
          <View style={styles.details}>
            <View style={{ alignItems: "center" }}>
              <Text numberOfLines={1} style={styles.title}>{title}</Text>
            </View>
            <Text numberOfLines={3} style={styles.text}>
              {description}
            </Text>
            <Text numberOfLines={2} style={styles.text}>
              <Text style={styles.sectionTitle}>Authors: </Text>{" "}
              {authors.join(", ")}
            </Text>
            <Text numberOfLines={2} style={styles.text}>
              <Text style={styles.sectionTitle}>Categories: </Text>
              {categories.join(", ")}
            </Text>
            <Text numberOfLines={2} style={styles.text}>
              <Text style={styles.sectionTitle}>Date published: </Text>{" "}
              {moment(publishedDate).format("DD MMM YYYY")}
            </Text>
          </View>
          <View style={styles.actions}>{children}</View>
        </View>
      </TouchableCmp>
    </View>
  );
};

export default memo(FavCategoryBookItem);

const styles = StyleSheet.create({
  touchable: {
    overflow: "hidden",
    borderRadius: 10,
    height: 250,  
    maxWidth: 450,
    margin: 5,
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
  imageButtonContainer: {
    width: "40%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: "column",
    overflow: "hidden",
  },
  imageContainer: {
    height: "70%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  details: {
    width: "60%",
    padding: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
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
  buttonStyle: {
    backgroundColor: Colors.primary,
    borderRadius: 45,
    width: 90,
    marginTop: 5,
  },
});
