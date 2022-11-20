import express from "express";
// import {
//   getAllUser,
//   createUser,
//   deleteUser,
//   updateUser,
// } from "../controller/apiController";
const router = express.Router();
const initApi = (app) => {
  // router.get("/users", getAllUser);
  // router.post("/createUser", createUser);
  // router.delete("/deleteUser/:id", deleteUser);
  // router.put("/updateUser/:id", updateUser);
  return app.use("/api/v1", router);
};

export default initApi;
