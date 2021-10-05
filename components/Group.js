import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { getTeamsData } from "../api/teams";
const Group = ({ title, groupId }) => {
  const [teamsData, setTeamsData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const getTeamsByGroupHandler = async (groupId) => {
    const teams = await getTeamsData(groupId);
    setTeamsData(teams);
  };

  useEffect(() => {
    getTeamsByGroupHandler(groupId);
  }, []);
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.container}>
        <Text>{title}</Text>
        {teamsData.map((team) => (
          <Image
            key={team.id}
            style={styles.image}
            source={{
              uri: `http://192.168.1.11:5000/images/${team.logo}.jpg`,
            }}
          />
        ))}
      </View>
    </TouchableOpacity>
  );
};

export default Group;

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  image: {
    width: 20,
    height: 20,
  },
});
