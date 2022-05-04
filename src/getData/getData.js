const axios = require("axios");
const mapArrayToString = require("../mapArrayToString/mapArrayToString");

const getData = async () => {
  try {
    const response = await axios.get("http://jsonplaceholder.typicode.com/users");
    const userIds = response.data.map((user) => user.id);
    return mapArrayToString(userIds);
  } catch (e) {}
};
module.exports = getData;
