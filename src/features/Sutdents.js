import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
  name: "student",
  initialState: {
    value: [
      {
        email: "ninthu1999@gmail.com",
      },
      {
        email: "thechosen.one.0502@gmail.com",
      },
    ],
  },
  reducers: {
    addstudent: (state, action) => {
      state.value.push(action.payload);
    },
    removestudent: (state, action) => {
      state.value = state.value.filter(
        (student) => student.email !== action.payload.email
      );
    },
    updatestudent: (state, action) => {
      const index = state.value.findIndex(
        (student) => student.email === action.payload.email
      );
      state.value[index] = action.payload;
    },
  },
});

export default studentSlice.reducer;
export const { addstudent, removestudent, updatestudent } =
  studentSlice.actions;
