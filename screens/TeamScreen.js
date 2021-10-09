import React, { useEffect, useState, useRef, useMemo } from "react";
import { StyleSheet, Text, Pressable, View, FlatList } from "react-native";
import { getTeamData } from "../api/teams";
import { getPlayersData } from "../api/players";
import Field from "../components/Field";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import PlayerListItem from "../components/PlayerListItem";
const TeamScreen = ({ route }) => {
  const { teamId } = route.params;
  const [teamInfo, setTeamInfo] = useState({});
  const [teamPlayers, setTeamPlayers] = useState([]);
  const playersBS = useRef();
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

  const snapPoints = useMemo(() => ["1%", "60%"], []);
  // const snapPoints = [0, "50%"];

  const viewPlayersList = () => {
    playersBS.current?.expand();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Field />
      {/* <Text>{teamInfo.title}</Text>
        <Image
          style={styles.logo}
          source={{
            uri: `http://192.168.1.11:5000/images/${teamInfo.logo}.jpg`,
          }}
        /> */}
      {/* <ScrollView>
        {teamPlayers.map((player) => (
          <Text key={player.id}>
            {player.firstname} {player.lastname}
          </Text>
        ))}
      </ScrollView> */}
      <Pressable style={styles.button} onPress={viewPlayersList}>
        <Text>Voir les joueurs</Text>
      </Pressable>
      <BottomSheet
        ref={playersBS}
        index={0}
        snapPoints={snapPoints}
        // onChange={handleSheetChanges}
      >
        <BottomSheetFlatList
          data={teamPlayers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <PlayerListItem player={item} />}
        />
      </BottomSheet>
    </SafeAreaView>
  );
};

export default TeamScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
  },
  button: {
    backgroundColor: "orange",
    width: "90%",
    padding: 10,
    marginTop: "5%",
    alignItems: "center",
    borderRadius: 50,
  },
  contentContainer: {},
});
