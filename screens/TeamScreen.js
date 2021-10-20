import React, { useEffect, useState, useRef, useMemo } from "react";
import { StyleSheet } from "react-native";
import { getTeamData } from "../api/teams";
import { getPlayersData } from "../api/players";
import Field from "../components/Field";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import PlayerListItem from "../components/PlayerListItem";
import { useSelector } from "react-redux";

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

  const { positionSelected } = useSelector((state) => state.playersField);

  useEffect(() => {
    playersBS.current?.expand();
    console.log(positionSelected);
  }, [positionSelected]);

  const snapPoints = useMemo(() => ["1%", "60%"], []);

  return (
    <SafeAreaView style={styles.container}>
      <Field />

      <BottomSheet ref={playersBS} index={0} snapPoints={snapPoints}>
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
