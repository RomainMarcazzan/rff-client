import axios from "axios";

export const getTeamsData = async (groupId) => {
  try {
    const response = await axios.get(
      `http://192.168.43.177:5000/api/team/group/${groupId}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getTeamData = async (teamId) => {
  try {
    const response = await axios.get(
      `http://192.168.43.177:5000/api/team/${teamId}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
