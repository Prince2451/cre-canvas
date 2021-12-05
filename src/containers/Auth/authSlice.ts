import { StoreSlice } from "../../App/store";

export interface IUser {
  name: string;
  email: string;
  username: string;
}

export interface IAuthSlice {
  user: IUser | null;
}

const createSlice: StoreSlice<IAuthSlice> = (set, get) => {
  return {
    user: null,
    setUser: () => {},
  };
};

export default createSlice;
