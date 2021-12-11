import { model, Schema } from "mongoose";
import { IUser } from "../auth";

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  refreshToken: { type: String, required: true },
});

const User = model<IUser>("users", userSchema);

export { User };
