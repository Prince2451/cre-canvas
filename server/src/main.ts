import express from "express";
import { connect } from "mongoose";
import { routes } from "./modules";
import { setConfig } from "./dotenv";

setConfig();

const app = express();

app.use(express.json());

app.use("/api", routes);

app.listen(process.env.PORT, () => {
  connect(process.env.MONGO_DB_URL)
    .then(() => {
      console.log("Db Connected");
    })
    .catch((err) => {
      console.log(err);
    });
});
