import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInfo, IUserInfoRes } from "../../models/IUserInfo";
import { IUser } from "../../models/IUsers";

const initialState: IUserInfo = {
  user: null,
  text: "",
  error: "",
};

const recipeInfoSLice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
      // state.text = action.payload.support.text;
      console.log(state.user);
      console.log(state.text);
    },
    setUserInfoError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export default recipeInfoSLice.reducer;
export const { setUserInfo, setUserInfoError } = recipeInfoSLice.actions;
