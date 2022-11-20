// import mysql from "mysql2/promise";

// // create the connection to database
// let pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "nodejs",
// });
const { Sequelize } = require("sequelize");
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "mysql",
});
export default sequelize;
