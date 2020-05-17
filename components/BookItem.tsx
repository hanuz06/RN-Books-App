import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Dimensions,
} from "react-native";

import { Image, Card } from "react-native-elements";

// interface Props {
//   props: {
//     onSelect: any;
//     id: string;
//     image: string;
//     description: string;
//     authors: string[];
//     children: any;
//   };
// }

const BookItem: React.FC = (props: any): JSX.Element => {
  let TouchableCmp: any = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <Card containerStyle={styles.cardStyle}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={() => props.onSelect(props.id)} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{ uri: props.image }}
                PlaceholderContent={<ActivityIndicator />}
              />
            </View>
            <View style={styles.details}>
              <Text numberOfLines={3} style={styles.text}>
                {props.description}
              </Text>
              <Text numberOfLines={2} style={styles.text}>
                <Text style={styles.author}>Authors: </Text>{" "}
                {props.authors.join(", ")}
              </Text>
            </View>
            <View style={styles.actions}>{props.children}</View>
          </View>
        </TouchableCmp>
      </View>
    </Card>
  );
};

export default BookItem;

const styles = StyleSheet.create({
  cardStyle: {
    flex: 1,
    maxHeight: 420,
    width: "100%",
    maxWidth: Dimensions.get('screen').width/2-10,
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 10,
    padding: 2,
    elevation: 3,
  },
  touchable: { overflow: "hidden", borderRadius: 10, width: "100%" },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  details: {
    height: "25%",
    padding: 5,
  },
  text: {
    fontFamily: "roboto-regular",
    fontSize: 16,
    paddingVertical: 3,
  },

  actions: {
    justifyContent: "center",
    alignItems: "center",
    height: "15%",
  },
  author: {
    fontFamily: "roboto-bold",
  },
});
