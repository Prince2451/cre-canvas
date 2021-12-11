import { sign } from "jsonwebtoken";
import { jwtRefreshTokenSecret, jwtSecret, tokenExpiry } from "./constants";

export function generateTokens(
  data: any,
  options: { secret?: string; refreshToken?: boolean }
): Promise<{ refreshToken?: string; token: string }>;
export function generateTokens(
  data: any,
  options: { secret?: string; refreshToken: false }
): Promise<{ token: string }>;
export function generateTokens(
  data: any,
  options?: {
    secret?: string;
    refreshToken?: true;
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
  }
) {
  const { secret = jwtSecret, refreshToken = true } = options || {};

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
