import React, { Component } from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import Card from "../Card";

interface Props {
  numberOfRounds: number;
  restartGame: Function;
}

const GameOver = ({ numberOfRounds, restartGame }: Props) => {
  return (
    <Card style={styles.gameOverCard}>
      <View>
        <Text style={styles.title}>Game Over!</Text>
        <View>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/9/95/Kan%C5%8D_Jigor%C5%8D_c1937.jpg",
            }}
            style={styles.image}
          />
        </View>
        <Text style={styles.message}>
          The Game Took {numberOfRounds} Rounds
        </Text>
        <Button title="Play Again!" onPress={() => restartGame()} />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  gameOverCard: {},
  title: {
    alignSelf: "center",
  },
  image: {
    height: 400,
    width: 300,
    borderRadius: 200,
    marginVertical: 20,
  },
  message: {
    alignSelf: "center",
  },
});

export default GameOver;
