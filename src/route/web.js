import express from "express";
import {
  getHomePage,
  // getAboutPage,
  // getDetailPage,
} from "../controller/homeController";
const router = express.Router();
const initRoutes = (app) => {
  router.get("/", getHomePage);
  // router.get("/about", getAboutPage);
  // router.get("/detail/user/:id", getDetailPage);
  router.get;
  return app.use("/", router);
};

export default initRoutes;
