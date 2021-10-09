import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FieldPlayer = ({ players, position, indexRow }) => {
  return (
    <View style={indexRow === 5 ? styles.positionsWing : styles.positions}>
      {players[position].map((player, indexPos) => (
        <View key={indexPos} style={styles.shirt}>
          <Ionicons name="shirt" size={50} color="black" />
          <Text style={styles.playerName}>{position}</Text>
        </View>
      ))}
    </View>
  );
};

export default FieldPlayer;

const styles = StyleSheet.create({
  positions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  positionsWing: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  shirt: {
    alignItems: "center",
  },
  playerName: {
    backgroundColor: "#333333bb",
    color: "white",
    padding: 2,
    fontWeight: "bold",
    paddingHorizontal: 7,
  },
});
