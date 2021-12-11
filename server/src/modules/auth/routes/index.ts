import { Router } from "express";
import { login, register } from "../controllers";

const routes = Router();

routes.post("/login", login);
routes.post("/register", register)

export { routes };
