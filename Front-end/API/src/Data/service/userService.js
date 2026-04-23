import { axiosInstance } from "../axiosInstance";

export const getUsers = async () => {
  const res = await axiosInstance.get("/users");
  return res;
};
