import React from "react";
import { View, StyleSheet, TextStyle } from "react-native";

interface Props {
  style?: TextStyle | TextStyle[];
  [props: string]: any;
}
const Card = ({ style, children }: Props) => {
  return <View style={{ ...style, ...styles.inputContainer }}>{children}</View>;
};

const styles = StyleSheet.create({
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
});

export default Card;
