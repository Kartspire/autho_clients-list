import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInfo } from "../../models/IUserInfo";
import { IUser } from "../../models/IUsers";

const initialState: IUserInfo = {
  user: null,
};

const recipeInfoSLice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
  },
});

export default recipeInfoSLice.reducer;
export const { setUserInfo } = recipeInfoSLice.actions;
