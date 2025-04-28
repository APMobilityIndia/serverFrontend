// src/module/wallet/redux/walletSlice.ts

import { createSlice } from "@reduxjs/toolkit";
import {
  getWithdrawHistory,
  getDepositHistory,
  getActiveChannel,
  getUserBankAccount,
  shiftWinningToWallet, // ✅ Import it here
  getWithdrawalDetails, // ✅ import it
} from "./walletApi";

interface WalletState {
  depositHistory: any[];
  withdrawHistory: any[];
  activeChannel: any[];
  bankDetails: any[];
  withdrawalDetails: any | null; // ✅ new
  loading: boolean;
  error: string | null;
}

const initialState: WalletState = {
  depositHistory: [],
  withdrawHistory: [],
  activeChannel: [],
  bankDetails: [],
  withdrawalDetails: null, // ✅ new
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

      // Active Channels
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

      // Bank Details
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
      })

      // 💸 Shift Winning to Wallet
      .addCase(shiftWinningToWallet.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(shiftWinningToWallet.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(shiftWinningToWallet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Withdrawal Details
      .addCase(getWithdrawalDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWithdrawalDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.withdrawalDetails = action.payload;
      })
      .addCase(getWithdrawalDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default walletSlice.reducer;
