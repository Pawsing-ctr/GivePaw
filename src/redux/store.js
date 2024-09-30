import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import donatsReducer from "./slice/donatsSlice";

const rootReducer = combineReducers({
  user: userReducer,
  donats: donatsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
