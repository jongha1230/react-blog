import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(localStorage.getItem("login"));

const initialState = {
  isLoggedIn: storedUser ? true : false,
  user: storedUser ? storedUser : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
      localStorage.setItem("login", JSON.stringify(action.payload));
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem("login");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
