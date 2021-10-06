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

const GroupScreen = ({ route }) => {
  const { teams } = route.params;
  const navigation = useNavigation();

  return (
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
              uri: `http://192.168.1.11:5000/images/${team.logo}.jpg`,
            }}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default GroupScreen;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
