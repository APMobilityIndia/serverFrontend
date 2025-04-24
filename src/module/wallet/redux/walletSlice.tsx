// src/module/wallet/redux/walletSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import {
  getWithdrawHistory,
  getDepositHistory,
  getActiveChannel,
  getUserBankAccount,
} from "./walletApi";

interface WalletState {
  depositHistory: any[];
  withdrawHistory: any[];
  activeChannel: any[];
  bankDetails: any[];

  loading: boolean;
  error: string | null;
}

const initialState: WalletState = {
  depositHistory: [],
  withdrawHistory: [],
  activeChannel: [],
  bankDetails: [],
  loading: false,
  error: null,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Deposit
      .addCase(getDepositHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDepositHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.depositHistory = action.payload;
      })
      .addCase(getDepositHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Withdraw
      .addCase(getWithdrawHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWithdrawHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.withdrawHistory = action.payload;
      })
      .addCase(getWithdrawHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      //Active Channels

      .addCase(getActiveChannel.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getActiveChannel.fulfilled, (state, action) => {
        state.loading = false;
        state.activeChannel = action.payload;
      })
      .addCase(getActiveChannel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      //Bank Details

      .addCase(getUserBankAccount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserBankAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.bankDetails = action.payload;
      })
      .addCase(getUserBankAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default walletSlice.reducer;
