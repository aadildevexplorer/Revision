import { axiosInstance } from "../axiosInstance";

export const getUser = async () => {
  const res = await axiosInstance.get("/users");
  return res;
};
