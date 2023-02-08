import axios, { AxiosError } from "axios";
import { toggleLoader } from "../app/reducers/loaderSlice";
import { setUserInfo, setUserInfoError } from "../app/reducers/userInfoSlice";
import { AppDispatch } from "../app/store";
import { IUserInfo, IUserInfoRes } from "../models/IUserInfo";
import { IUser, IUsers } from "../models/IUsers";

export const getUserInfo = (id: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(toggleLoader());
    const responce = await axios.get<IUserInfoRes>(
      `https://reqres.in/api/users/${id}`
    );
    // dispatch(setUserInfo(responce.data));
    dispatch(toggleLoader());
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError) {
      dispatch(setUserInfoError(error.response?.data.error));
      dispatch(toggleLoader());
    }
  }
};
