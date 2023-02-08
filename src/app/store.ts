import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authorizationSlice from "./reducers/authSlice";
import formValidSlice from "./reducers/formValidSlice";
import loaderSlice from "./reducers/loaderSlice";
import showPassSlice from "./reducers/showPassSlice";
import userInfoSlice from "./reducers/userInfoSlice";
import usersSlice from "./reducers/usersSlice";

export const store = configureStore({
  reducer: {
    formValid: formValidSlice,
    loader: loaderSlice,
    auth: authorizationSlice,
    users: usersSlice,
    userInfo: userInfoSlice,
    visiblePass: showPassSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
