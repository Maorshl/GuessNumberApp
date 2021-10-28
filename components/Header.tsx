import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { useSelector } from "react-redux";

interface Props {
  title: string;
}

interface Combined {
  game: { chosenNumber: number };
}

const Header = ({ title }: Props) => {
  const chosenNumber = useSelector(
    (state: Combined) => state.game.chosenNumber
  );
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
      <Text>{chosenNumber}</Text>
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
