import { createSlice } from '@reduxjs/toolkit'

const notelice = createSlice({
  name: "notes",
  initialState: {
    notes: ["first value...!!"],
    count: 0,
  },
  reducers: {
    add: (state, action) => {
      state.notes.push(action.payload);
    },
    remov: (state, action) => {
      state.notes.pop();
    },
  },
});

export default notelice.reducer;
export const { add, remov } = notelice.actions;