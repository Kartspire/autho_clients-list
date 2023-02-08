import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUsers";

interface IUsersState {
  users: IUser[];
  error: string;
  usersWasLoaded: boolean;
}

const initialState: IUsersState = {
  users: [],
  error: "",
  usersWasLoaded: false,
};

const usersSLice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
      state.users.map((el) =>
        localStorage.getItem(`${el.id}`)
          ? (el.liked = true)
          : (el.liked = false)
      );
      state.usersWasLoaded = true;
    },
    setUsersError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    addLike(state, action: PayloadAction<number>) {
      state.users.map((el) => {
        if (el.id === action.payload) {
          el.liked = true;
        }
        return el;
      });
    },
    removeLike(state, action: PayloadAction<number>) {
      state.users.map((el) => {
        if (el.id === action.payload) {
          el.liked = false;
        }
        return el;
      });
    },
  },
});

export default usersSLice.reducer;
export const { setUsers, setUsersError, addLike, removeLike } =
  usersSLice.actions;
