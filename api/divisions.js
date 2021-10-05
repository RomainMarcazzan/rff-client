import axios from "axios";

export const getDivisionData = async () => {
  try {
    const response = await axios.get("http://192.168.1.11:5000/api/divisions");
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
