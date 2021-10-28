import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 36,
    width: "100%",
    height: 90,
    backgroundColor: Platform.OS === "ios" ? "#f7287b" : "black",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 18,
  },
});

export default Header;
