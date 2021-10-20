import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { getPositionSelected } from "../features/playersField/playersFieldSlice";

const FieldPlayersByRow = ({ positionRow, indexRow }) => {
  const { structureField } = useSelector((state) => state.playersField);
  const dispatch = useDispatch();
  return (
    <View style={indexRow === 5 ? styles.positionsWing : styles.positions}>
      {structureField[positionRow].map((playerField, indexPlayerField) => (
        <Pressable
          key={indexPlayerField}
          style={styles.shirt}
          onPress={() => {
            dispatch(
              getPositionSelected({
                row: positionRow,
                positionNumSelected: playerField.positionNum,
              })
            );
          }}
        >
          <Ionicons name="shirt" size={35} color="black" />
          <Text style={styles.playerName}>{playerField.positionNum}</Text>
          <Text style={playerField.firstname ? styles.playerName : ""}>
            {playerField.firstname}
          </Text>
          <Text style={playerField.lastname ? styles.playerName : ""}>
            {playerField.lastname}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default FieldPlayersByRow;

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
    fontWeight: "bold",
    paddingHorizontal: 4,
    marginBottom: 2,
  },
});
