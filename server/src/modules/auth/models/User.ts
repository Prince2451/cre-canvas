import { model, Schema } from "mongoose";
import { IRefreshToken, IUser } from "../authTypes";

const refreshTokenSchema = new Schema<IRefreshToken>({
  token: { type: String, required: true },
  expiresAt: { type: Date, required: true },
});

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  refreshTokens: [{ type: refreshTokenSchema, required: true }],
});

const User = model<IUser>("users", userSchema);

export { User };
