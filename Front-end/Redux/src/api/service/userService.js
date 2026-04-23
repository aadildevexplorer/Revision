import axiosInstance from "../axiosInstance";

const getUsers = async () => {
  const res = await axiosInstance.get("/users");
  return res.data;
};

export default getUsers;
