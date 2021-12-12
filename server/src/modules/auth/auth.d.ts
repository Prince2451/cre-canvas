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
