import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    darkMode: false,
    activeTab: "home",
  },
  reducers: {
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload; 
    },
  },
});

export const { setDarkMode, setActiveTab } = uiSlice.actions;
export default uiSlice.reducer;
