import { configureStore } from "@reduxjs/toolkit";
import auth from "../redux/feature/authSlice";

const store = configureStore({
  reducer: {
    auth,
  },
});

export default store;
