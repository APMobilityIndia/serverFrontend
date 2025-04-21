import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../module/auth/redux/authSlice";
import homeReducer from "../module/home/redux/homeSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer
});

export default rootReducer;
