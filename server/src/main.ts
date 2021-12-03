import express from "express";
import { routes } from "./modules";

const app = express();

app.use(express.json());

app.use("/api", routes);

app.listen(8080);
