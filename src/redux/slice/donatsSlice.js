import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  donats: [],
};

export const donatsSlice = createSlice({
  name: "donats",
  initialState,
  reducers: {
    addDonation: (state, action) => {
      state.donats.unshift(action.payload);
    },
    setDonats: (state, action) => {
      state.donats = action.payload;
    },
  },
});

export const { addDonation, setDonats } = donatsSlice.actions;
export default donatsSlice.reducer;
