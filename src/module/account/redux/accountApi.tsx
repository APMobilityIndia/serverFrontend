import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../redux/axiosInterceptor"; // ✅ using same interceptor

// 1️⃣ Login History
export const getLoginHistory: any = createAsyncThunk(
  "account/getLoginHistory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("user/login-history");
      console.log("🧠 Login History API Response:", response.data?.history);

      const mappedHistory = response.data.history.map((item: any) => ({
        id: item._id,
        location: item.location,
        loggedInAt: item.logged_in_at,
      }));

      return mappedHistory;
    } catch (error: any) {
      console.error("❌ Login history fetch failed:", error?.response);
      return rejectWithValue(
        error?.response?.data?.message || "Failed to fetch login history"
      );
    }
  }
);

// 2️⃣ Fetch Profile
export const getUserProfile: any = createAsyncThunk(
  "account/getUserProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("user/profile");
      console.log("🧠 Profile API Response:", response.data?.data);

      return response.data.data;
    } catch (error: any) {
      console.error("❌ User profile fetch failed:", error?.response);
      return rejectWithValue(
        error?.response?.data?.message || "Failed to fetch user profile"
      );
    }
  }
);

// 3️⃣ Update Profile
export const updateUserProfile: any = createAsyncThunk(
  "account/updateUserProfile",
  async (formData: FormData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(
        "user/update/profile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("✅ Update Profile Response:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Update Profile Error:", error?.response);
      return rejectWithValue(
        error?.response?.data?.message || "Failed to update profile"
      );
    }
  }
);
