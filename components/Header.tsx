import React from "react";
import { StyleSheet, Text, View, Platform, Dimensions } from "react-native";
import { useSelector } from "react-redux";

interface Props {
  title: string;
}

interface Combined {
  game: { startGame: boolean; numberOfRounds: number };
}

const Header = ({ title }: Props) => {
  const start = useSelector((state: Combined) => state.game.startGame);

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
    fontSize: 23,
    marginBottom: "auto",
  },
});

export default Header;
