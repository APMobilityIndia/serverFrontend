// src/module/wallet/redux/walletApi.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../redux/axiosInterceptor"; // ✅ use this

export const getWithdrawHistory: any = createAsyncThunk(
  "wallet/getWithdrawHistory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("wallet/withdrawal-history");

      const mappedWithdraws = response.data.withdrawal.map((item: any) => ({
        id: item._id,
        amount: item.amount,
        status: item.status,
        date: item.createdAt,
        method: item.method,
      }));

      return mappedWithdraws;
    } catch (error: any) {
      console.error("Withdraw history fetch failed:", error?.response);
      return rejectWithValue(
        error?.response?.data?.message || "Failed to fetch withdraw history"
      );
    }
  }
);

export const getDepositHistory: any = createAsyncThunk(
  "wallet/getDepositHistory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("wallet/deposit-history");

      const mappedDeposits = response.data.deposit.map((item: any) => ({
        id: item._id,
        amount: item.amount,
        status: item.status,
        date: item.createdAt,
        method: item.method,
      }));

      return mappedDeposits;
    } catch (error: any) {
      console.error("Deposit history fetch failed:", error?.response);
      return rejectWithValue(
        error?.response?.data?.message || "Failed to fetch deposit history"
      );
    }
  }
);

export const getActiveChannel: any = createAsyncThunk(
  "wallet/getActiveChannel",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        "wallet/get-ActiveChannelOpyions"
      );

      console.log("💡 Wallet Channel API Response:", response.data?.data);
      return response?.data?.data;
    } catch (error: any) {
      console.error("Deposit history fetch failed:", error?.response);
      return rejectWithValue(
        error?.response?.data?.message || "Failed to fetch deposit history"
      );
    }
  }
);

export const getUserBankAccount: any = createAsyncThunk(
  "wallet/getUserBankAccount",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("wallet/GetUserBankAccounts");
      console.log("💡 get bank accounts API Response:", response?.data);
      return response?.data;
    } catch (error: any) {
      console.error(" getUserBankAccount fetch failed:", error?.response);
      return rejectWithValue(
        error?.response?.data?.message || "Failed to fetch getUserBankAccount"
      );
    }
  }
);

export const addUserBankAccount: any = createAsyncThunk(
  "wallet/addUserBankAccount",
  async (formData: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "wallet/add-bankaccount",
        formData
      );
      console.log("✅ Add Bank Account Response:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Add Bank Account Error:", error?.response);
      return rejectWithValue(
        error?.response?.data?.message || "Failed to add bank account"
      );
    }
  }
);

export const updateUserBankAccount: any = createAsyncThunk(
  "wallet/updateUserBankAccount",
  async (
    { id, formData }: { id: string; formData: any },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.put(
        `wallet/update-bankaccount/${id}`,
        formData
      );
      console.log("✅ Update Bank Account Response:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Update Bank Account Error:", error?.response);
      return rejectWithValue(
        error?.response?.data?.message || "Failed to update bank account"
      );
    }
  }
);

// ✅ Add this at the bottom of your existing walletApi.ts file

export const addWithdrawalRequest: any = createAsyncThunk(
  "wallet/addWithdrawalRequest",
  async (
    { bankAccountId, money }: { bankAccountId: string; money: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.post("wallet/add-withdrawalBank", {
        bankAccountId,
        money,
      });

      console.log("💸 Withdrawal API Response:", response.data); // ✅ Console the response

      return response.data;
    } catch (error: any) {
      console.error("❌ Withdrawal API Error:", error?.response);
      return rejectWithValue(
        error?.response?.data?.message || "Failed to add withdrawal request"
      );
    }
  }
);
