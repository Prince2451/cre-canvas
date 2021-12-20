import { RequestHandler } from "express";
import { bearer } from "../utils/constants";
import { generateTokenFields, throwErr, verifyToken } from "../utils/helpers";

const authMiddleware: RequestHandler = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    const token = authorization
      ?.substring(authorization.indexOf(bearer) + bearer.length)
      .trim();
    if (!token) return throwErr(401, "Invalid token");
    const data = await verifyToken(token);
    res.locals.user = generateTokenFields(data);
    next();
  } catch (err) {
    next(err);
  }
};

export default authMiddleware;
