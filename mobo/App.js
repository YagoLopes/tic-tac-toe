import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  Button,
} from "react-native";
import tictactoe from "./src/tictactoe";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    tictactoe.start();
    this.state = {
      board: tictactoe.board,
      gameover: tictactoe.gameover,
    };
  }

  makePlay(index) {
    tictactoe.make_play(index);
    this.setState({
      board: tictactoe.board,
      gameOver: tictactoe.gameover,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.board.map((value, index) => (
          <TouchableOpacity
            key={index}
            style={styles.piece}
            onPress={() => this.makePlay(index)}
          >
            <Text style={styles.pieceText}>{value}</Text>
          </TouchableOpacity>
        ))}

        <Button onPress={() => tictactoe.restart()} title="Reiniciar" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  piece: {
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").width / 3,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 0.5,
    borderColor: "#111",
  },

  pieceText: {
    fontSize: 60,
  },
});
