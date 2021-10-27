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

interface Props {
  title: string;
}

const InputArea = ({ title }: Props) => {
  const [enteredValue, setEnteredValue] = useState<string>("");
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [chosenNumber, setChosenNumber] = useState<number | null>(null);

  const numberInputHandler = (inputText: string) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const confirmInputHandler = () => {
    const parsed = parseInt(enteredValue);
    if (isNaN(parsed) || parsed > 99 || parsed <= 0) {
      Alert.alert("Please Enter a Valid Number");
      return;
    }
    setConfirmed(true);
    setChosenNumber(parsed);
  };

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
                setChosenNumber(null);
              }}
              color="red"
            ></Button>
            <Button title="Confirm" onPress={confirmInputHandler}></Button>
          </View>
        </View>
        {chosenNumber ? (
          <Text>Chosen Number is: {chosenNumber}</Text>
        ) : (
          <Text />
        )}
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
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 30,
    maxWidth: "80%",
    margin: 20,
  },

  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    maxWidth: "80%",
  },
});

export default InputArea;
