import express from "express";
import "./dotenv";
import { connect } from "mongoose";
import { routes } from "./modules";
import errorMiddleware from "./middlewares/error.middleware";

const app = express();

app.use(express.json());

app.use("/api", routes);

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
