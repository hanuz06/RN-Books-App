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
// import Card from "./Card";
import { Card, ListItem, Button, Icon } from "react-native-elements";

const BookItem = (props: any) => {
  let TouchableCmp: any = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <Card
      containerStyle={{
        flex: 1,
        maxHeight: 400,
        width: "100%",
        marginHorizontal: 5,
        marginVertical: 5,
        borderRadius: 10,
        padding: 2,
        elevation: 3,
      }}
    >
      <View style={styles.touchable}>
        <TouchableCmp onPress={() => props.onSelect(props.id)} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.details}>
              <Text numberOfLines={3} style={styles.text}>                
                {props.shortDescription}
              </Text>
              <Text numberOfLines={2} style={styles.text}>               
                Authors: {props.authors}
              </Text>
            </View>
            <View style={styles.actions}>
              {props.children}
            </View>
          </View>
        </TouchableCmp>
      </View>
    </Card>
  );
};

export default BookItem;

const styles = StyleSheet.create({
  // book: {
  //   flex: 1,
  //   height: 450,
  //   width: 50,
  //   marginHorizontal: 5,
  //   marginVertical: 10,
  // },
  touchable: { overflow: "hidden", borderRadius: 10, width: "100%" },
  imageContainer: {
    width: "100%",
    height: "55%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  details: {
    alignItems: 'center',
    height: '25%',
    padding: 5,
    borderColor: 'blue',
    borderWidth: 1
  },
  title: {    
    fontFamily: "roboto-bold",
    fontSize: 16,
  },
  text: {
    fontFamily: "roboto-regular",
    fontSize: 14,  
  },

  actions: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "20%",
    paddingVertical: 0,
    borderColor: 'red',
    borderWidth: 1
  },
});
