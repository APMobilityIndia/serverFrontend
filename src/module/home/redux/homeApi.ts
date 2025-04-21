import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchBanners = createAsyncThunk(
  "home/fetchBanners",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}common/banners`);

      // Transform to match your frontend structure
      const mappedBanners = response.data.banners.map((banner: any) => ({
        id: banner._id,
        image: banner.imageUrl,
        title: "Promotional Banner", // Placeholder
        link: banner.link || "#",
      }));

      return mappedBanners;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Failed to fetch banners"
      );
    }
  }
);
