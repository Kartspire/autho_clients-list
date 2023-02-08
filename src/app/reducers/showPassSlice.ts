import { createSlice } from "@reduxjs/toolkit";

interface IPassState {
  visiblePass: boolean;
  visibleRepeatPass: boolean;
}

const initialState: IPassState = {
  visiblePass: false,
  visibleRepeatPass: false,
};

const loaderSlice = createSlice({
  name: "loaderSlice",
  initialState,
  reducers: {
    toggleVisiblePass(state) {
      state.visiblePass = !state.visiblePass;
    },
    toggleVisibleRepeatPass(state) {
      state.visibleRepeatPass = !state.visibleRepeatPass;
    },
  },
});

export default loaderSlice.reducer;
export const { toggleVisiblePass, toggleVisibleRepeatPass } =
  loaderSlice.actions;
