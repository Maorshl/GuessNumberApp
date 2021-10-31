import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from "react-native";
import Header from "./components/Header";
import GameScreen from "./components/screens/GameScreen";
import InputArea from "./components/screens/InputArea";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { createStore, combineReducers } from "redux";
import { Provider, useDispatch } from "react-redux";
import gameReducer from "./store/reducers/game.js";
import { chooseNumber } from "./store/actions/game";

const rootReducer = combineReducers<any>({ game: gameReducer });

const store = createStore(rootReducer);

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
    <Provider store={store}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <View style={styles.screen}>
            <Header title="Guess a Number" />
            <Text style={styles.title}>Start a New Game</Text>
            {!startGame ? (
              <InputArea setStartGame={setStartGame} title="Select a Number" />
            ) : (
              <GameScreen
                restartGame={restartGame}
                setNumberOfRounds={setNumberOfRounds}
                numberOfRounds={numberOfRounds}
              />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </Provider>
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
  safeArea: {
    height: Dimensions.get("screen").height,
  },
});
