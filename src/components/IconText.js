import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";
const IconText = (props) => {
  const { bodyText, iconColor, iconName, bodyTextStyles } = props;
  return (
    <View style={styles.container}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[styles.textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { alignItems: "center" },
  textTheme: {
    fontWeight: "bold"
  }
});

export default IconText;
