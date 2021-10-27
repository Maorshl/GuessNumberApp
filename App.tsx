import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import InputArea from "./components/screens/InputArea";
export default function App() {
  const [startGame, setStartGame] = useState<boolean>(false);
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <Text style={styles.title}>Start a New Game</Text>
      {!startGame ? (
        <InputArea setStartGame={setStartGame} title="Select a Number" />
      ) : (
        <Text>Game Component</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
