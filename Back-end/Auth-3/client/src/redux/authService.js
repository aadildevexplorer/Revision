import axios from "axios";
const register = async (formData) => {
  const res = await axios.post(
    "http://localhost:8080/api/user/register",
    formData,
  );
  localStorage.setItem("user", JSON.stringify(res.data));
  return res.data;
};

const login = async (formData) => {
  const res = await axios.post(
    "http://localhost:8080/api/user/login",
    formData,
  );
  localStorage.setItem("user", JSON.stringify(res.data));
  return res.data;
};

const authService = { register, login };
export default authService;
