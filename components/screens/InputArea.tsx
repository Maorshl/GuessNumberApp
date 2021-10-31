import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../Card";
import Colors from "../../constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import { chooseNumber, startGame } from "../../store/actions/game.js";

interface Props {
  title: string;
  setStartGame: Function;
}

interface Combined {
  game: { chosenNumber: number; startGame: boolean };
}

const InputArea = ({ title, setStartGame }: Props) => {
  const [enteredValue, setEnteredValue] = useState<string>("");
  const [confirmed, setConfirmed] = useState<boolean>(false);

  const numberInputHandler = (inputText: string) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const reduxNumber = useSelector((state: Combined) => state.game.chosenNumber);

  const disPatch = useDispatch();

  const confirmInputHandler = () => {
    const parsed = parseInt(enteredValue);
    if (isNaN(parsed) || parsed > 99 || parsed <= 0) {
      Alert.alert("Please Enter a Valid Number");
      return;
    }
    setConfirmed(true);
    disPatch(chooseNumber(parsed));
    Keyboard.dismiss();
  };

  const confirmationCard = (
    <>
      <Text>The Number You Chose is:</Text>
      <Text style={styles.confirmNumber}>{reduxNumber}</Text>
      <View>
        <Button
          title={"Start Game"}
          onPress={() => {
            setStartGame(true);
            disPatch(startGame(true));
          }}
        />
      </View>
    </>
  );

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <Text>{title}</Text>
          <TextInput
            textAlign="center"
            keyboardType="number-pad"
            style={styles.input}
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.bottomContainer}>
            <Button
              title="Reset"
              onPress={() => {
                setEnteredValue("");
                disPatch(chooseNumber(0));
              }}
              color="red"
            ></Button>
            <Button title="Confirm" onPress={confirmInputHandler}></Button>
          </View>
        </View>
        {reduxNumber ? <Card children={confirmationCard}></Card> : <Text />}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  inputContainer: {
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    textShadowRadius: 6,
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 7,
    marginVertical: 2,
    fontFamily: "open-sans-bold",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 30,
    maxWidth: "80%",
    margin: 20,
  },
  confirmNumber: {
    color: Colors.primary,
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 4,
    fontSize: 40,
    padding: 8,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.36,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    maxWidth: "80%",
  },
});

export default InputArea;
