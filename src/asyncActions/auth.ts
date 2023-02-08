import axios, { AxiosError } from "axios";
import { authError, authSucces } from "../app/reducers/authSlice";
import { resetValid } from "../app/reducers/formValidSlice";
import { toggleLoader } from "../app/reducers/loaderSlice";
import { AppDispatch } from "../app/store";
import { IAuthRes } from "../models/IAuthRes";

export const auth =
  (email: string | undefined, password: string | undefined) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(toggleLoader());
      const responce = await axios.post<IAuthRes>(
        "https://reqres.in/api/register",
        {
          email,
          password,
        }
      );
      dispatch(authSucces(responce.data));
      dispatch(toggleLoader());
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(toggleLoader());
        dispatch(resetValid());
        const errorRes = {
          data: error.response?.data,
          status: error.response?.status,
        };
        dispatch(authError(errorRes));
      }
    }
  };
