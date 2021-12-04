import { model, Schema } from "mongoose";

const userSchema = new Schema<{
  name: string;
  username: string;
  password: string;
  email: string;
}>({
  name: String,
  username: String,
  password: String,
  email: String,
});

const User = model("users", userSchema);

export { User };
