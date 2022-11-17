import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: null,
};

export const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTheme } = preferencesSlice.actions;

/*************
 * SELECTORS *
 *************/
export const themeSelector = (state) => state.preferences.theme;

export default preferencesSlice.reducer;
