import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const countSlice = createSlice({
  name: "value",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    // countPlusHundred: (state) => {
    //   state.value += 100;
    // },
    // countPlus2Hungred: (state) => {
    //   state.value += 200;
    // },
    // countPlus5Hungred: (state) => {
    //   state.value += 500;
    // },
    // countPlusThousand: (state) => {
    //   state.value += 1000;
    // },
  },
});

export const {
  countPlusHundred,
  countPlus2Hungred,
  countPlus5Hungred,
  countPlusThousand,
  setValue,
} = countSlice.actions;
export default countSlice.reducer;
