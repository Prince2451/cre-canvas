import { Router } from "express";
import { login, register, token, user } from "../controllers";

const publicRoutes = Router();
const privateRoutes = Router();

publicRoutes.post("/login", login);
publicRoutes.post("/register", register);
publicRoutes.post("/token", token);
privateRoutes.get("/user", user);

export { publicRoutes, privateRoutes };
