import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

const CustomHeaderButton = (props: any): JSX.Element => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={28}
      // color={Platform.OS === 'android' ? 'white' : Colors.primary}
      {...Platform.select({
        android: { color: "white" },
        ios: { color: Colors.primary },
      })}
    />
  );
};

export default CustomHeaderButton;
