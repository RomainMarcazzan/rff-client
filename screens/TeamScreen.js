import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { getTeamData } from "../api/teams";
import { getPlayersData } from "../api/players";

const TeamScreen = ({ route }) => {
  const { teamId } = route.params;
  const [teamInfo, setTeamInfo] = useState({});
  const [teamPlayers, setTeamPlayers] = useState([]);

  const getTeamInfoHandler = async (teamId) => {
    const teamData = await getTeamData(teamId);
    setTeamInfo(teamData);
  };

  const getTeamPlayersHandler = async (teamId) => {
    const playersData = await getPlayersData(teamId);
    setTeamPlayers(playersData);
  };

  useEffect(() => {
    getTeamInfoHandler(teamId);
  }, []);

  useEffect(() => {
    getTeamPlayersHandler(teamId);
  }, []);

  return (
    <View>
      <Text>{teamInfo.title}</Text>
      <Image
        style={styles.image}
        source={{
          uri: `http://192.168.1.11:5000/images/${teamInfo.logo}.jpg`,
        }}
      />
      <ScrollView>
        {teamPlayers.map((player) => (
          <Text key={player.id}>
            {player.firstname} {player.lastname}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default TeamScreen;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
