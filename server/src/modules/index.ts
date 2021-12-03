import e, { Router } from "express";
import * as auth from "./auth";

const routes = Router();

routes.use("/auth", auth.routes);

export { routes };
