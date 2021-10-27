import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import GameScreen from "./components/screens/GameScreen";
import InputArea from "./components/screens/InputArea";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [startGame, setStartGame] = useState<boolean>(false);
  const [chosenNumber, setChosenNumber] = useState<number>(0);
  const [numberOfRounds, setNumberOfRounds] = useState<number>(0);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);

  const restartGame = () => {
    setStartGame(false);
    setChosenNumber(0);
    setNumberOfRounds(0);
  };

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log("There was An Error!")}
      />
    );
  }

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
        <GameScreen
          restartGame={restartGame}
          chosenNumber={chosenNumber}
          setNumberOfRounds={setNumberOfRounds}
          numberOfRounds={numberOfRounds}
        />
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
