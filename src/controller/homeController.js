import pool from "../config/connectDB";
import db from "../models/index";
export const getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.send(data);
  } catch (e) {
    console.log(e);
  }
};
// export const getAboutPage = async (req, res) => {
//   const [rows, fields] = await pool.execute("SELECT * FROM `users`");
//   return res.render("index.ejs", {
//     dataUser: rows,
//   });
// };
// export const getDetailPage = async (req, res) => {
//   const { id } = req.params;
//   const [rows, fields] = await pool.execute(
//     "SELECT * FROM `users` where id  = ?",
//     [id]
//   );
//   return res.send(rows);
// };
