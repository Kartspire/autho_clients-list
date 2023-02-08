import { IUser } from "./IUsers";

export interface IUserInfo {
  user: IUser | null;
  text: string;
  error: string;
}
export interface IUserInfoRes {
  data: IUser;
  support: IUserInfo;
}
