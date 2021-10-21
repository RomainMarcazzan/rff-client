import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addPlayerToStructure } from "../features/playersField/playersFieldSlice";

const PlayerListItem = ({ player }) => {
  const { positionSelected, isReset } = useSelector(
    (state) => state.playersField
  );
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    setSelected(false);
  }, [isReset]);

  return (
    <Pressable
      onPress={() => {
        dispatch(
          addPlayerToStructure({
            firstname: player.firstname,
            lastname: player.lastname,
            positionNum: positionSelected.positionNumSelected,
            structureRow: positionSelected.row,
          })
        );
        setSelected(!selected);
      }}
      disabled={selected}
    >
      <Text style={selected ? styles.nameSelected : null}>
        {player.firstname} {player.lastname}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  nameSelected: {
    opacity: 0.4,
  },
});
export default PlayerListItem;
