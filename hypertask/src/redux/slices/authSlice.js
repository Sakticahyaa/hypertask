import { createSlice } from "@reduxjs/toolkit";
import { user } from "../../assets/data"; // Assuming this is a default user object

const initialState = {
  user: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  token: localStorage.getItem("token") || null,
  isLoggedIn: !!localStorage.getItem("token"),
  isSidebarOpen: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Replace setCredentials to handle both user and token
    setCredentials: (state, action) => {
      // Action payload should contain user and token
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      
      // Store user info and token in localStorage
      localStorage.setItem("userInfo", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
    },
    
    // Modify logout to clear both user and token
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      
      // Remove both user info and token from localStorage
      localStorage.removeItem("userInfo");
      localStorage.removeItem("token");
    },
    
    // Keep your existing sidebar toggle
    setOpenSidebar: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { setCredentials, logout, setOpenSidebar } = authSlice.actions;

export default authSlice.reducer;