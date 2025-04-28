import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../module/auth/redux/authSlice";
import homeReducer from "../module/home/redux/homeSlice";
import walletReducer from "../module/wallet/redux/walletSlice";
import accountSlice from "../module/account/redux/accountSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  wallet: walletReducer,
  account: accountSlice,
});

export default rootReducer;
