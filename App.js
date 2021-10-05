import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";
import { getDivisionData } from "./api/divisions";
import Division from "./components/Division";
export default function App() {
  // const getDataUsingAsyncAwaitGetCall = async () => {
  //   try {
  //     const response = await axios.get("http://192.168.1.1:5000/api/divisions");
  //     alert(JSON.stringify(response.data));
  //   } catch (error) {
  //     // handle error
  //     alert(error.message);
  //   }
  // };
  const [divisionData, setDivisionData] = useState([]);

  useEffect(() => {
    const fetchDivisionData = async () => {
      const divisions = await getDivisionData();
      setDivisionData(divisions);
    };
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
    alignItems: "center",
    marginTop: Platform.OS === "android" ? 50 : 20,
  },
});
