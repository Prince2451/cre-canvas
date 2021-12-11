import { RequestHandler } from "express";
import { User } from "../models";
import { compare, genSalt, hash } from "bcryptjs";
import { saltRound } from "../../../utils/constants";
import { generateTokens, throwErr } from "../../../utils/helpers";

const login: RequestHandler<
  any,
  {
    refreshToken: string;
    token: string;
  },
  Partial<{
    email: string;
    password: string;
  }>
> = async (req, response, next) => {
  try {
    if (!req.body.email || !req.body.password)
      throwErr(400, "email and password are required");
    const user = await User.findOne({
      email: req.body.email,
    });
    if (!user) throwErr(404, "User does not exists");
    const passMatch = await compare(req.body.password, user.password);
    if (!passMatch) throwErr(401, "Password do not match");
    const { refreshToken, token } = await generateTokens(user.toObject(), {
      refreshToken: !user.refreshToken,
    });
    return response
      .status(200)
      .json({ refreshToken: refreshToken || user.refreshToken, token });
  } catch (err) {
    next(err);
  }
};

const register: RequestHandler<
  {},
  {
    token: string;
    refreshToken: string;
  },
  Partial<{ email: string; username: string; name: string; password: string }>
> = async (req, response, next) => {
  try {
    if (
      !req.body.name ||
      !req.body.username ||
      !req.body.password ||
      !req.body.email
    ) {
      throw throwErr(400, "name, username, email, password are required");
    }
    const alreadyExist = await User.findOne({
      $or: [
        { username: req.body.username },
        {
          email: req.body.email,
        },
      ],
    });
    if (alreadyExist) {
      throw throwErr(409, "email or username already exists");
    }
    const salt = await genSalt(saltRound);
    const hashed = await hash(req.body.password, salt);
    const userObj = {
      email: req.body.email,
      username: req.body.username,
      name: req.body.name,
      password: hashed,
    };
    const { refreshToken, token } = await generateTokens(userObj);
    await User.create({ ...userObj, refreshToken });
    return response.status(201).json({ refreshToken, token });
  } catch (err) {
    next(err);
  }
};

const refreshToken: RequestHandler<any, {
  token: string
}, {
  
}> = () => {

}

export { login, register };
