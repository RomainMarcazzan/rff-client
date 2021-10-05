import axios from "axios";

export const getTeamsData = async (groupId) => {
  try {
    const response = await axios.get(
      `http://192.168.1.11:5000/api/team/${groupId}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
