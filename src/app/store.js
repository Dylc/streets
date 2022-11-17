import { configureStore } from "@reduxjs/toolkit";
import preferencesReducer from "features/preferences/preferencesSlice";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    preferences: preferencesReducer,
  },
});
