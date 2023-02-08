import { createSlice } from "@reduxjs/toolkit";

interface ILoaderState {
  loading: boolean;
}

const initialState: ILoaderState = {
  loading: false,
};

const loaderSlice = createSlice({
  name: "loaderSlice",
  initialState,
  reducers: {
    toggleLoader(state) {
      state.loading = !state.loading;
    },
  },
});

export default loaderSlice.reducer;
export const { toggleLoader } = loaderSlice.actions;
