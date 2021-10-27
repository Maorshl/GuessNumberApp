import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Card from "../Card";

interface Props {
  numberOfRounds: number;
  restartGame: Function;
}

const GameOver = ({ numberOfRounds, restartGame }: Props) => {
  return (
    <Card>
      <View>
        <Text>Game Over!</Text>
        <Text>The Game Took {numberOfRounds} Rounds</Text>
        <Button title="Play Again!" onPress={() => restartGame()} />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({});

export default GameOver;
