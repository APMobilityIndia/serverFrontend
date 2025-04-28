import { createSlice } from "@reduxjs/toolkit";
import {
  getLoginHistory,
  getUserProfile,
  updateUserProfile,
} from "./accountApi";

interface AccountState {
  loginHistory: any[];
  profile: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: AccountState = {
  loginHistory: [],
  profile: null,
  loading: false,
  error: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 1️⃣ Login History
      .addCase(getLoginHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getLoginHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.loginHistory = action.payload;
      })
      .addCase(getLoginHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // 2️⃣ Fetch Profile
      .addCase(getUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // 3️⃣ Update Profile
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        // After successful update you might want to update profile field too
        state.profile = {
          ...state.profile,
          ...action.payload.updatedUser, // assuming backend returns updated data
        };
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default accountSlice.reducer;
