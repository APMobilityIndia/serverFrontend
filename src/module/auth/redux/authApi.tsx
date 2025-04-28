import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../../../redux/axiosInterceptor";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const register: any = createAsyncThunk(
  "auth/register",
  async (
    data: { name_user: string; phone: string; plain_password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(`${BASE_URL}auth/register`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Registration failed"
      );
    }
  }
);

export const login: any = createAsyncThunk(
  "auth/login",
  async (
    data: { phone: string; plain_password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(`${BASE_URL}auth/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Store the token in localStorage for future API calls
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message || "Login failed");
    }
  }
);

export const logout: any = createAsyncThunk(
  "auth/logout",
  async (
    data: { phone: string; plain_password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.post(
        `${BASE_URL}auth/logout`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Store the token in localStorage for future API calls
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message || "Login failed");
    }
  }
);
