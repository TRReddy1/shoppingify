import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const listSlice = createSlice({
  name: "listSlice",
  initialState,
  reducers: {
    fetchLists: (state, action) => {
      return action.payload;
    },
    addedList: (state, action) => {
      console.log(action.payload);
      state.push(action.payload);
    },
  },
});

export const { fetchLists, addedList } = listSlice.actions;
export default listSlice.reducer;
