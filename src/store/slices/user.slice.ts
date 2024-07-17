import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserInfo, UserResponseAuthFirebase } from "../../types/user.type";

const initialState: UserInfo = {
  email: "",
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserResponseAuthFirebase>) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.email = "";
      state.token = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, logout } = userSlice.actions;

export const selectUser = (state: { user: UserInfo }) => state.user;

export default userSlice.reducer;
