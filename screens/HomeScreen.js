import React, { useEffect, useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { getDivisionData } from "../api/divisions";
import Division from "../components/Division";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  const [divisionData, setDivisionData] = useState([]);

  const fetchDivisionData = async () => {
    const divisions = await getDivisionData();
    setDivisionData(divisions);
  };
  useEffect(() => {
    fetchDivisionData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={divisionData}
        keyExtractor={(item) => item.title.toString()}
        renderItem={({ item }) => (
          <Division title={item.title} divisionId={item.id} />
        )}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // marginTop: Platform.OS === "android" ? 50 : 20,
  },
});
