import { createSlice } from "@reduxjs/toolkit";
import { logInfo } from "@/Utils";

const themeSlice = createSlice({
  name: "theme",

  initialState: { theme: null, darkMode: null },

  reducers: {
    changeTheme: (state, { payload: { theme, darkMode } }) => {
      if (typeof theme !== undefined) {
        state.theme = theme;
      }

      if (typeof darkMode !== undefined) {
        state.darkMode = darkMode;
      }
      logInfo("New theme is: " + theme);
    },

    setDefaultTheme: (state, { payload: { theme, darkMode } }) => {
      logInfo("Default theme is: " + theme);
      if (!state.theme) {
        state.theme = theme;
        state.darkMode = darkMode;
      }
    },
  },
});

const { actions, reducer } = themeSlice;

export const { changeTheme, setDefaultTheme } = actions;
export default reducer;
