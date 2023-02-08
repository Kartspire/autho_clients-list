import axios, { AxiosError } from "axios";
import { toggleLoader } from "../app/reducers/loaderSlice";
import { setUserInfo, setUserInfoError } from "../app/reducers/userInfoSlice";
import { addLike, removeLike } from "../app/reducers/usersSlice";
import { AppDispatch } from "../app/store";
import { IUserInfo, IUserInfoRes } from "../models/IUserInfo";
import { IUser, IUsers } from "../models/IUsers";

export const patchUserLike = (id: number) => (dispatch: AppDispatch) => {
  dispatch(addLike(id));
  localStorage.setItem(`${id}`, "true");
};

export const patchUserUnLike = (id: number) => (dispatch: AppDispatch) => {
  dispatch(removeLike(id));
  localStorage.removeItem(`${id}`);
};
