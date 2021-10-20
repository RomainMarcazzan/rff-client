import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const GroupScreen = ({ route }) => {
  const { teams } = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {teams.map((team) => (
          <TouchableOpacity
            key={team.id}
            onPress={() => navigation.navigate("Team", { teamId: team.id })}
          >
            <Text>{team.title}</Text>
            <Image
              style={styles.image}
              source={{
                uri: `http://192.168.43.177:5000/images/${team.logo}.jpg`,
              }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default GroupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: 50,
    height: 50,
  },
});
