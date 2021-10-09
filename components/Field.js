import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import field from "../assets/field.png";
import FieldPlayer from "./FieldPlayer";

const Field = () => {
  const players = {
    PL: [null, null, null],
    SL: [null, null],
    TL: [null, null, null],
    DEM: [null, null],
    CEN: [null, null],
    AIL: [null, null],
    ARR: [null],
  };
  return (
    <ImageBackground style={styles.field} resizeMode="stretch" source={field}>
      {Object.keys(players).map((position, indexRow) => (
        <FieldPlayer
          key={indexRow}
          players={players}
          position={position}
          indexRow={indexRow}
        />
      ))}
    </ImageBackground>
  );
};

export default Field;

const styles = StyleSheet.create({
  field: {
    width: "100%",
    // height: "90%",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
