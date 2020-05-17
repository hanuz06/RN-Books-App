import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

interface Props<T> {
  imageUri: T;
  name: T;
}

const Category: React.FC<Props<string>> = ({ imageUri, name }:any): JSX.Element => {
  return (
    <View
      style={{
        height: 130,
        width: 130,
        marginLeft: 20,
        borderWidth: 0.5,
        borderColor: "#ddd",
      }}
    >
      <View style={{ flex: 2 }}>
        <Image source={imageUri} style={styles.imageStyle} />
      </View>
      <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
        <Text>{name}</Text>
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
  },
});
