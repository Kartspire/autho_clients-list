import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthRes } from "../../models/IAuthRes";
import { IError } from "../../models/IError";

interface IAuth {
  authoRes: IAuthRes | null;
  error: IError | null;
}

const initialState: IAuth = {
  authoRes: null,
  error: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    authSucces(state, action: PayloadAction<IAuthRes>) {
      state.error = null;
      state.authoRes = action.payload;
      localStorage.setItem("token", state.authoRes.token);
    },
    authError(state, action: PayloadAction<IError>) {
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { authSucces, authError } = authSlice.actions;
