import apiInstance from "../apiInstance";

const getUsers = async () => {
  const res = await apiInstance.get("/users");
  return res.data;
};
export default getUsers;
