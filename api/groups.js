import axios from "axios";

export const getGroupsData = async (divisionId) => {
  try {
    const response = await axios.get(
      `http://192.168.1.11:5000/api/group/${divisionId}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
