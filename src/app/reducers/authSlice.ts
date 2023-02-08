import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthoRes } from "../../models/IAuthoRes";

interface IAuth {
  authoRes: IAuthoRes | null;
  error: string;
}

const initialState: IAuth = {
  authoRes: null,
  error: "",
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    authSucces(state, action: PayloadAction<IAuthoRes>) {
      state.error = "";
      state.authoRes = action.payload;
      console.log(state.authoRes);
      localStorage.setItem("token", state.authoRes.token);
    },
    authError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { authSucces, authError } = authSlice.actions;
