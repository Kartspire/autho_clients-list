import axios, { AxiosError } from "axios";
import { toggleLoader } from "../app/reducers/loaderSlice";
import { setUsers, setUsersError } from "../app/reducers/usersSlice";
import { AppDispatch } from "../app/store";
import { IUser, IUsers } from "../models/IUsers";

export const getUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(toggleLoader());
    const responce = await axios.get<IUsers>("https://reqres.in/api/users");
    dispatch(setUsers(responce.data.data));
    dispatch(toggleLoader());
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError) {
      dispatch(setUsersError(error.message));
      dispatch(toggleLoader());
    }
  }
};
