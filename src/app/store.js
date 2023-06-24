import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../features/Sutdents";
export const store = configureStore({
  reducer: {
    student: studentReducer,
  },
});
