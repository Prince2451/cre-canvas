export interface IUser {
  name: string;
  email: string;
  username: string;
}

export interface IAuthSlice {
  user: IUser | null;
}
