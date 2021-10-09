import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PlayerListItem = ({ player }) => {
  return (
    <View>
      <Text>
        {player.firstname} {player.lastname}
      </Text>
    </View>
  );
};

export default PlayerListItem;

const styles = StyleSheet.create({});
