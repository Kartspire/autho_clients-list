import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router";
import { authError, authSucces } from "../app/reducers/authSlice";
import { toggleLoader } from "../app/reducers/loaderSlice";
import { AppDispatch } from "../app/store";
import { IAuthoRes } from "../models/IAuthoRes";

export const auth =
  (email: string | undefined, password: string | undefined) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(toggleLoader());
      const responce = await axios.post<IAuthoRes>(
        "https://reqres.in/api/register",
        {
          email,
          password,
        }
      );
      dispatch(authSucces(responce.data));
      dispatch(toggleLoader());
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        dispatch(toggleLoader());
        dispatch(authError(error.response?.data.error));
      }
    }
  };
