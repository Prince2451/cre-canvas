import { Router } from "express";
import * as auth from "./auth";

const publicRoutes = Router();
const privateRoutes = Router();

publicRoutes.use("/auth", auth.routes.publicRoutes);
privateRoutes.use("/auth", auth.routes.privateRoutes);

export { publicRoutes, privateRoutes };
