export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  liked: boolean;
}
export interface IUsers {
  data: IUser[];
}
