// import pool from "../config/connectDB";

// export const getAllUser = async (req, res) => {
//   const [rows, fields] = await pool.execute("SELECT * FROM `users` ");
//   return res.status(200).json({
//     mesage: "success!",
//     results: rows,
//   });
// };

// export const createUser = async (req, res) => {
//   const { firtName, lastName, address, age } = req.body;
//   if (!firtName || !lastName || !address || !age) {
//     return res.send("request error!!");
//   }
//   await pool.execute(
//     "insert into users (firtName,lastName,address,age) values ( ? ,? ,?, ?)",
//     [firtName, lastName, address, age]
//   );
//   return res.status(200).json({
//     mesage: "post success!",
//   });
// };
// export const deleteUser = async (req, res) => {
//   const { id } = req.params;
//   if (!id) {
//     return res.send("request error!!");
//   }
//   await pool.execute("delete from users where id= ? ", [id]);
//   return res.status(200).json({
//     mesage: "delete success!",
//   });
// };
// export const updateUser = async (req, res) => {
//   const { id } = req.params;
//   console.log(id);
//   const [result] = await pool.execute("SELECT * FROM `users` where id= ? ", [
//     id,
//   ]);
//   console.log(result[0]);
//   const {
//     firtName: firtNameDefault,
//     lastName: lastNameDefault,
//     age: ageDefault,
//     address: addressDefault,
//   } = result[0];
//   const {
//     firtName = firtNameDefault,
//     lastName = lastNameDefault,
//     address = addressDefault,
//     age = ageDefault,
//   } = req.body;
//   if (!id) {
//     return res.send("request error!!");
//   }
//   await pool.execute(
//     "update users set firtName = ?, lastName = ?, address = ?, age = ? where id = ?",
//     [firtName, lastName, address, age, id]
//   );
//   console.log(result);
//   return res.status(200).json({
//     mesage: "update success!",
//   });
// };
