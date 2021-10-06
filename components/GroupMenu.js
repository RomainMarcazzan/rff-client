import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getTeamsData } from "../api/teams";

const GroupMenu = ({ title, groupId }) => {
  const [teams, setTeams] = useState([]);
  const navigation = useNavigation();

  const getTeamsByGroupHandler = async (groupId) => {
    const teamsData = await getTeamsData(groupId);
    setTeams(teamsData);
  };

  useEffect(() => {
    getTeamsByGroupHandler(groupId);
  }, []);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Group", {
          teams,
        });
      }}
    >
      <View style={styles.container}>
        <Text>{title}</Text>
        {teams.map((team) => (
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

export default GroupMenu;

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  image: {
    width: 20,
    height: 20,
  },
});
