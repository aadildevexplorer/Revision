import axiosInstance from "../axiosInstance";

const getUsers = async () => {
  const res = await axiosInstance.get("/users");
  console.log(res)
  return res;
};

export default getUsers;
