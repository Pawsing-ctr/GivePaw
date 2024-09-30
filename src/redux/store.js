import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import countReducer from "./slice/countSlice";

const rootReducer = combineReducers({
  user: userReducer,
  value: countReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
