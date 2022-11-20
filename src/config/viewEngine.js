import express from "express";
const configViewEngine = (app) => {
  app.use(express.static("./src/public"));
  app.set("views", "./src/view");
  app.set("view engine", "ejs");
};
export default configViewEngine;
