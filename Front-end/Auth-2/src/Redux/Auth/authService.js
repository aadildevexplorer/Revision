import axios from "axios";

const API_URL = "https://userflow-backend-4.onrender.com/api/auth/user";

const register = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, formData);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.log(error, "Registration Failed");
  }
};

const login = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, formData);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.log(error, "Login Failed");
  }
};

export const authService = { register, login };
