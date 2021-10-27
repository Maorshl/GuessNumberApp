import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

interface Props {
  title: string;
  placeholder: string;
}

const InputArea = ({ title, placeholder }: Props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <Text>{title}</Text>
        <TextInput
          keyboardType="number-pad"
          placeholder={placeholder}
          style={styles.input}
        />
        <View style={styles.bottomContainer}>
          <Button title="Reset" onPress={() => {}} color="red"></Button>
          <Button title="Confirm" onPress={() => {}}></Button>
        </View>
      </View>
    </View>
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
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 200,
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
