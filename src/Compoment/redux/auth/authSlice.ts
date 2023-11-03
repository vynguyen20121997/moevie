import { createSlice } from "@reduxjs/toolkit";
// import { fetchCurrentUser } from "./authAction";

const initialState = {
  error: null,
  currentUser: null,
  loading: false,
};

const authSlice: any = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    // logout: (state) => {
    //   localStorage.removeItem("accessToken");
    //   state.isAuthenticated = false;
    // },
  },
});

export const { login, setCurrentUser } = authSlice.actions;

export default authSlice.reducer;
