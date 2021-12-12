import { Router } from "express";
import { login, register, token } from "../controllers";

const routes = Router();

routes.post("/login", login);
routes.post("/register", register);
routes.post("/token", token);

export { routes };
