import { User } from "../models";
import { compare, genSalt, hash } from "bcryptjs";
import { saltRound } from "../../../utils/constants";
import {
  createRefreshToken,
  generateTokenFields,
  generateTokens,
  throwErr,
  verifyRefreshToken,
} from "../../../utils/helpers";
import { IUser, TokenFields } from "../authTypes";
import {
  PrivateRequestHandler,
  PublicRequestHandler,
} from "../../../utils/types";

const login: PublicRequestHandler<
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
    const { refreshToken, token } = await generateTokens(
      generateTokenFields(user.toObject()),
      {
        refreshToken: true,
      }
    );
    user.refreshTokens.push(refreshToken);
    await user.save();
    return response
      .status(200)
      .json({ refreshToken: refreshToken.token, token });
  } catch (err) {
    next(err);
  }
};

const register: PublicRequestHandler<
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
    const userObj: Omit<IUser, "refreshTokens"> = {
      email: req.body.email,
      username: req.body.username,
      name: req.body.name,
      password: hashed,
    };
    const refreshToken = createRefreshToken();
    const newUser = await User.create({
      ...userObj,
      refreshTokens: [refreshToken],
    });
    const { token } = await generateTokens(
      generateTokenFields(newUser.toObject()),
      {
        refreshToken: false,
      }
    );
    return response
      .status(201)
      .json({ refreshToken: refreshToken.token, token });
  } catch (err) {
    next(err);
  }
};

const token: PublicRequestHandler<
  any,
  {
    token: string;
  },
  Partial<{ refreshToken: string; username: string }>
> = async (req, res, next) => {
  try {
    if (!req.body.refreshToken || !req.body.username)
      return throwErr(400, "Insufficient data");
    let projection: Partial<Record<keyof Omit<IUser, "password">, any>> = {};
    for (let key in User.schema.obj) {
      const userKey = key as keyof IUser;
      if (userKey === "refreshTokens") {
        projection[userKey] = {
          $elemMatch: {
            token: req.body.refreshToken,
          },
        };
        continue;
      } else if (userKey === "password") continue;
      projection[userKey] = true;
    }
    const user = await User.findOne(
      {
        username: req.body.username,
      },
      projection
    );

    if (
      !user?.refreshTokens[0] ||
      !verifyRefreshToken(user.refreshTokens[0].expiresAt)
    ) {
      return throwErr(401, "Invalid token");
    }
    const { token } = await generateTokens(
      generateTokenFields(user.toObject()),
      {
        refreshToken: false,
      }
    );
    return res.json({
      token,
    });
  } catch (err) {
    next(err);
  }
};

const user: PrivateRequestHandler<any, TokenFields> = (_, res) => {
  return res.json(res.locals.user);
};

export { login, register, token, user };
