import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  Dimensions,
} from "react-native";
import Card from "../Card";
import GameOver from "./GameOver";

interface Props {
  chosenNumber: number;
  setNumberOfRounds: Function;
  numberOfRounds: number;
  restartGame: Function;
}

const GameScreen = ({
  chosenNumber,
  setNumberOfRounds,
  numberOfRounds,
  restartGame,
}: Props) => {
  const [guessedNumber, setGuessNumber] = useState<number>(0);
  const [found, setFound] = useState<boolean>(false);

  const low = useRef(1);
  const high = useRef(99);

  const generateRandomNumberBetween = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    return randomNumber;
  };

  const nextGuess = (direction: string) => {
    if (
      (direction === "lower" && guessedNumber < chosenNumber) ||
      (direction === "higher" && guessedNumber > chosenNumber)
    ) {
      Alert.alert("Don't lie", "You know that is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      high.current = guessedNumber;
    } else {
      low.current = guessedNumber;
    }

    const check = generateRandomNumberBetween(low.current, high.current);

    setGuessNumber(check);
    setNumberOfRounds((prevNum: number) => prevNum + 1);
  };

  useEffect(() => {
    setGuessNumber(generateRandomNumberBetween(0, 99));
  }, []);

  useEffect(() => {
    if (guessedNumber === chosenNumber) {
      setFound(true);
      return;
    }
  }, [guessedNumber]);

  return (
    <View style={styles.card}>
      {found ? (
        <GameOver numberOfRounds={numberOfRounds} restartGame={restartGame} />
      ) : (
        <Card>
          <Text>{guessedNumber}</Text>
          <View style={styles.gameButtons}>
            <Button
              title="Lower"
              onPress={() => nextGuess("lower")}
              color="red"
            />
            <Button title="Greater" onPress={() => nextGuess("higher")} />
          </View>
        </Card>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  gameButtons: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    width: "100%",
  },
  card: {
    // width: Dimensions.get("window").width,
    maxWidth: Dimensions.get("window").width / 1.2,
  },
});

export default GameScreen;
