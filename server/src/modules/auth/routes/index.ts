import { Router } from "express";
import { login } from "../controllers";

const routes = Router();

routes.use("/", login);

export { routes };
