import axios from "axios";

const getUsers = async () => {
  const users = await axios.get("https://jsonplaceholder.typicode.com/users");
  return users;
};

export default {
  getUsers
};
