import { Types } from "mongoose";
import { withDocId } from "../../utils/types";

export interface IUser {
  name: string;
  username: string;
  password: string;
  email: string;
  refreshTokens: Array<IRefreshToken>;
}

export interface IRefreshToken {
  token: string;
  expiresAt: Date;
}

export type tokenFields = withDocId<Omit<IUser, "refreshTokens" | "password">>;
