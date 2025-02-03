import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.name = action.payload;
    },
  },
});

console.log(userSlice);

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
