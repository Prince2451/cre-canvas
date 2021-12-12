import { randomUUID } from "crypto";
import { sign } from "jsonwebtoken";
import { IRefreshToken } from "../modules/auth/auth";
import { refreshTokenExpiry, jwtSecret, jwtTokenExpiry } from "./constants";

export function generateTokens(
  data: any,
  options?: { secret?: string; refreshToken: true; tokenExpiry?: number }
): Promise<{ refreshToken: IRefreshToken; token: string }>;
export function generateTokens(
  data: any,
  options: { secret?: string; refreshToken: false; tokenExpiry?: number }
): Promise<{ token: string }>;
export function generateTokens(
  data: any,
  options: { secret?: string; refreshToken?: boolean; tokenExpiry?: number }
): Promise<{ refreshToken?: IRefreshToken; token: string }>;
export function generateTokens(
  data: any,
  options?: {
    secret?: string;
    refreshToken?: true;
    tokenExpiry?: number;
  }
): Promise<{
  refreshToken: string;
  token: string;
}>;
export function generateTokens(
  data: any,
  options?: {
    secret?: string;
    refreshToken?: boolean;
    tokenExpiry?: number;
  }
) {
  const {
    secret = jwtSecret,
    refreshToken = true,
    tokenExpiry = jwtTokenExpiry,
  } = options || {};

  return new Promise((resolve, reject) => {
    sign(
      data,
      secret,
      {
        expiresIn: tokenExpiry,
      },
      async (err, encoded) => {
        if (err || !encoded) return reject(err);
        if (!refreshToken)
          resolve({
            token: encoded,
          });
        else {
          resolve({
            token: encoded,
            refreshToken: createRefreshToken(),
          });
        }
      }
    );
  });
}

export function createRefreshToken(): IRefreshToken {
  const token = randomUUID();
  const expiresAt = new Date(Date.now() + refreshTokenExpiry * 1000);
  return { token, expiresAt };
}

export function verifyRefreshToken(expiresAt: IRefreshToken["expiresAt"]) {
  return expiresAt.getTime() > Date.now();
}

export function throwErr(status: number, message?: string): never {
  throw {
    status,
    message,
  };
}
