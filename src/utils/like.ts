import { addLike, removeLike } from "../app/reducers/usersSlice";
import { AppDispatch } from "../app/store";

export const patchUserLike = (id: number) => (dispatch: AppDispatch) => {
  dispatch(addLike(id));
  localStorage.setItem(`${id}`, "true");
};

export const patchUserUnLike = (id: number) => (dispatch: AppDispatch) => {
  dispatch(removeLike(id));
  localStorage.removeItem(`${id}`);
};
