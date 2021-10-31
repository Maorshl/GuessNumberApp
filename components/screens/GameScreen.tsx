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
import { useSelector, useDispatch } from "react-redux";
import {
  addRound,
  chooseNumber,
  startGame,
  restartGameRedux,
} from "../../store/actions/game";

interface Props {
  setNumberOfRounds: Function;
  numberOfRounds: number;
  restartGame: Function;
}

interface Combined {
  game: { chosenNumber: number };
}

const GameScreen = ({
  setNumberOfRounds,
  numberOfRounds,
  restartGame,
}: Props) => {
  const [guessedNumber, setGuessNumber] = useState<number>(0);
  const [found, setFound] = useState<boolean>(false);

  const reduxNumber = useSelector((state: Combined) => state.game.chosenNumber);
  const disPatch = useDispatch();
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
      (direction === "lower" && guessedNumber < reduxNumber) ||
      (direction === "higher" && guessedNumber > reduxNumber)
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
    disPatch(addRound());
  };

  useEffect(() => {
    setGuessNumber(generateRandomNumberBetween(0, 99));
  }, []);

  useEffect(() => {
    if (guessedNumber === reduxNumber) {
      setFound(true);
      return;
    }
  }, [guessedNumber]);

  return (
    <View style={styles.card}>
      {found ? (
        <GameOver
          restartGame={() => {
            restartGame();
            disPatch(chooseNumber(0));
            disPatch(startGame(false));
            disPatch(restartGameRedux());
          }}
        />
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
    maxWidth: Dimensions.get("window").width / 1.2,
  },
});

export default GameScreen;
