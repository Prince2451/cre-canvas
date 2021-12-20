import { Router } from "express";
import { login, register, token } from "../controllers";

const publicRoutes = Router();
const privateRoutes = Router();

publicRoutes.post("/login", login);
publicRoutes.post("/register", register);
publicRoutes.post("/token", token);

export { publicRoutes, privateRoutes };
