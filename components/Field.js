import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import field from "../assets/field.png";
import FieldPlayersByRow from "./FieldPlayersByRow";
import { useSelector } from "react-redux";

const Field = () => {
  const { structureField } = useSelector((state) => state.playersField);
  const keys = ["PL", "SL", "TL", "DEM", "CEN", "AIL", "ARR"];
  return (
    <ImageBackground style={styles.field} resizeMode="stretch" source={field}>
      {keys.map((positionRow, indexRow) => (
        <FieldPlayersByRow
          key={indexRow}
          positionRow={positionRow}
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
    height: "100%",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
