import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getGroupsData } from "../api/groups";
import Group from "../components/Group";
const Division = ({ title, divisionId }) => {
  const [groupsData, setGroupsData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const getGroupsByDivisionHandler = async (divisionId) => {
    const groups = await getGroupsData(divisionId);
    setGroupsData(groups);
    setIsOpen(!isOpen);
  };
  return (
    <View>
      <TouchableOpacity onPress={() => getGroupsByDivisionHandler(divisionId)}>
        <Text>{title}</Text>
      </TouchableOpacity>
      {groupsData ? (
        isOpen ? (
          <FlatList
            data={groupsData}
            keyExtractor={(item) => item.title.toString()}
            renderItem={({ item }) => (
              <Group title={item.title} groupId={item.id} />
            )}
          ></FlatList>
        ) : //   <View>
        //     {groupsData.map((group) => (
        //       <TouchableOpacity key={group.id}>
        //         <Text>{group.title}</Text>
        //       </TouchableOpacity>
        //     ))}
        //   </View>
        null
      ) : null}
    </View>
  );
};

export default Division;

const styles = StyleSheet.create({});
