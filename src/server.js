import express from "express";
import configViewEngine from "./config/viewEngine";
import * as dotenv from "dotenv";
import initRoutes from "./route/web";
import initApi from "./route/api";
import sequelize from "./config/connectDB";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
configViewEngine(app);
initRoutes(app);
initApi(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
