import express from "express";
import "./dotenv";
import { connect } from "mongoose";
import * as routes from "./modules";
import errorMiddleware from "./middlewares/error.middleware";
import authMiddleware from "./middlewares/auth.middleware";

const app = express();

app.use(express.json());

app.use("/api", routes.publicRoutes);

app.use(authMiddleware);

app.use("/api", routes.privateRoutes);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  connect(process.env.MONGO_DB_URL)
    .then(() => {
      console.log("Db Connected");
    })
    .catch((err) => {
      console.log(err);
    });
});
