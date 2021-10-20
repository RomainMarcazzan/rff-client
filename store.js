import { configureStore } from "@reduxjs/toolkit";
import playersFieldReducer from "./features/playersField/playersFieldSlice";

export const store = configureStore({
  reducer: {
    playersField: playersFieldReducer,
  },
});
