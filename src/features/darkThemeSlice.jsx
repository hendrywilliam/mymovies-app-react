import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkTheme: true,
};

export const darkThemeSlice = createSlice({
  name: "darkTheme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { toggleTheme } = darkThemeSlice.actions;
export default darkThemeSlice.reducer;
