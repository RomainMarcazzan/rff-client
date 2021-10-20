import axios from "axios";

export const getPlayersData = async (teamId) => {
  try {
    const response = await axios.get(
      `http://192.168.43.177:5000/api/player/team/${teamId}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
