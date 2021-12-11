import { sign } from "jsonwebtoken";
import {
  jwtRefreshTokenExpiry,
  jwtRefreshTokenSecret,
  jwtSecret,
  jwtTokenExpiry,
} from "./constants";

export function generateTokens(
  data: any,
  options: { secret?: string; refreshToken?: boolean; tokenExpiry?: number }
): Promise<{ refreshToken?: string; token: string }>;
export function generateTokens(
  data: any,
  options: { secret?: string; refreshToken: false; tokenExpiry?: number }
): Promise<{ token: string }>;
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
          /* will generate token with different secret and it will be refresh token */
          const { token } = await generateTokens(data, {
            secret: jwtRefreshTokenSecret,
            refreshToken: false,
            tokenExpiry: jwtRefreshTokenExpiry,
          });
          resolve({
            token: encoded,
            refreshToken: token,
          });
        }
      }
    );
  });
}

export function throwErr(status: number, message?: string): never {
  throw {
    status,
    message,
  };
}
