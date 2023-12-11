import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: { color: "brown" } },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default themeSlice.reducer;
export const { changeColor } = themeSlice.actions;
