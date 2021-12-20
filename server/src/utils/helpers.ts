import { randomUUID } from "crypto";
import { JwtPayload, sign, verify } from "jsonwebtoken";
import { IRefreshToken, IUser, tokenFields } from "../modules/auth/authTypes";
import { refreshTokenExpiry, jwtSecret, jwtTokenExpiry } from "./constants";
import { Optional, withDocId } from "./types";

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

export function generateTokenFields(
  user: withDocId<Optional<IUser, "password" | "refreshTokens">>
): tokenFields {
  return {
    email: user.email,
    name: user.name,
    username: user.username,
    _id: user._id,
  };
}

export function verifyToken(token: string): Promise<JwtPayload & tokenFields> {
  return new Promise((resolve, reject) =>
    verify(token, jwtSecret, (err, decoded) => {
      if (err) reject(err);
      if (decoded) resolve(decoded as JwtPayload & tokenFields);
      reject(new Error("Token not valid"));
    })
  );
}
