import { RequestHandler } from "express";
import { User } from "../models";

const login: RequestHandler = async (req, response, next) => {
  // random stuff
  const user = new User({
    email: "j",
    name: "j",
  });
  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }
  return response.json({ done: "hello" });
};

export { login };
