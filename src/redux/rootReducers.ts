import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../module/auth/redux/authSlice";
import homeReducer from "../module/home/redux/homeSlice";
import walletReducer from "../module/wallet/redux/walletSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  wallet: walletReducer,
});

export default rootReducer;
