import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import GameScreen from "./components/screens/GameScreen";
import InputArea from "./components/screens/InputArea";

export default function App() {
  const [startGame, setStartGame] = useState<boolean>(false);
  const [chosenNumber, setChosenNumber] = useState<number>(0);
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <Text style={styles.title}>Start a New Game</Text>
      {!startGame ? (
        <InputArea
          chosenNumber={chosenNumber}
          setStartGame={setStartGame}
          setChosenNumber={setChosenNumber}
          title="Select a Number"
        />
      ) : (
        <GameScreen chosenNumber={chosenNumber} />
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
