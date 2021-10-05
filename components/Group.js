import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getTeamsData } from "../api/teams";

const Group = ({ title, groupId }) => {
  const [teamsData, setTeamsData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const getTeamsByGroupHandler = async (groupId) => {
    const teams = await getTeamsData(groupId);
    setTeamsData(teams);
    setIsOpen(!isOpen);
  };
  return (
    <View>
      <TouchableOpacity onPress={() => getTeamsByGroupHandler(groupId)}>
        <Text>{title}</Text>
      </TouchableOpacity>
      {teamsData ? (
        isOpen ? (
          <View>
            {teamsData.map((team) => (
              <Text key={team.id}>{team.title}</Text>
            ))}
          </View>
        ) : null
      ) : null}
    </View>
  );
};

export default Group;

const styles = StyleSheet.create({});
