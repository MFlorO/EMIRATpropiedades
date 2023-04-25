const { Usuario } = require("../database/db");
const { Op } = require("sequelize");
// const { getTemplate, sendEmail } = require("../config/nodemailer.config");


// //----------- GET -----------//
// exports.getAll = async (req, res) => {
//     try {
//         const users = await User.findAll({ order: [["nameUser", "ASC"]] });
//         if (users) return res.json(users);
//         return res
//             .status(404)
//             .json({ status: 404, message: "No se encontraron usuarios  " });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json(error);
//     }
// };
// exports.getById = async (req, res) => {
//     try {
//         const user = await User.findByPk(req.params.uid);
//         if (user) return res.json(user);
//         return res.status(404).json({
//             status: 404,
//             message: "No se encontró el usuario con ese uid ",
//         });
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json(error);
//     }
// };
// exports.getUserByName = async (req, res) => {
//     try {
//         const { nameUser } = req.query;

//         const users = await User.findAll({
//             order: [["nameUser", "ASC"]],
//             where: {
//                 nameUser: {
//                     [Op.iLike]: `%${nameUser}%`, //.toLowerCase(), el iLike ignora si son mayúsculas o minúsculas
//                 },
//             },
//             include: [{ model: Review }, { model: Payment }],
//         });

//         if (users) {
//             return res.json(users);
//         } else {
//             return res.status(404).json({
//                 status: 404,
//                 message: "No se encontraron usuarios con ese nombre ",
//             });
//         }
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json(error);
//     }
// };

// //----------- POST -----------//
// function validations(nameUser, email) {
//     if (nameUser && (nameUser.length < 2 || nameUser.length > 100))
//         return false;

//     const patternEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
//     if (!email || email === undefined || !patternEmail.test(email))
//         return false;

//     return true;
// }

// exports.createUser = async (req, res) => {
//     const { uid, nameUser, email, profilePic } = req.body;
//     try {
//         // if (!validations(nameUser, email))
//         // return res.status(400).json({status: 400, message: 'Error con las validaciones'});
//         // const userExist = await User.findByPk(uid);

//         const [row, created] = await User.findOrCreate({
//             where: { uid: uid },
//             defaults: { nameUser, email, profilePic },
//         });
//         if (created) {
//             try {
//                 const html = getTemplate(
//                     "bienvenida",
//                     row.dataValues.nameUser
//                 );
//                 await sendEmail(
//                     row.dataValues.email,
//                     "¡Bienvenido/a a Librería Henry!",
//                     html
//                 );
//             } catch (err) {
//                 console.log(err)
//             }
//         }
//         return res.status(201).json(row);
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json(error);
//     }
// };

// //----------- PUT -----------//
// exports.updateAdminUser = async (req, res) => {
//     const { uid } = req.params;
//     console.log(uid);
//     try {
//         let user = await User.findByPk(uid);
//         if (user) {
//             user.isAdmin = user.isAdmin ? false : true;
//             await user.save();
//         }
//         return res.status(204).json({});
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json(error);
//     }
// };

// //----------- DELETE -----------//  isActive=false
// exports.logicaldeleteUser = async (req, res) => {
//     const { uid } = req.params;
//     try {
//         let user = await User.findByPk(uid);
//         if (user) {
//             user.isActive = user.isActive ? false : true;
//             await user.save();
//             if (!user.isActive){
//                 console.log(user)
//                 console.log(user.nameUser)
//                 console.log(user.dataValues.nameUser)
//                 const html = getTemplate(
//                     "userEliminado",
//                     user.nameUser
//                 );
//                 await sendEmail(
//                     user.email,
//                     "Lamentamos que te vayas",
//                     html
//                 );
//             } else {
//                 const html = getTemplate(
//                     "userRestaurado",
//                     user.nameUser
//                 );
//                 await sendEmail(
//                     user.email,
//                     "¡Bienvenido/a de vuelta a Librería Henry!",
//                     html
//                 );
//             }
//         }
//         return res.status(204).json({});
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json(error);
//     }
// };
// //----------- BANNED -----------//  isBanned=true
// exports.bannedUser = async (req, res) => {
//     const { uid } = req.params;
//     try {
//         let user = await User.findByPk(uid);
//         if (user) {
//             user.isBanned = user.isBanned ? false : true;
//             await user.save();
//             if (user.isBanned) {
//                 const html = getTemplate("banned", user.nameUser);
//                 await sendEmail(user.email,'Estatus de usuario',html)
//             } else {
//                 const html = getTemplate("unbanned", user.nameUser);
//                 await sendEmail(user.email,'Estatus de usuario',html)
//             }
//             try {
//             } catch (err) {
//                 console.log(err)
//             }
//             return res.status(204).json({})
//         }
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json(error);
//     }
// }


//  //----------- PUT -----------//
// exports.updateUserName = async (req, res) => {
//     const { uid } = req.params;
//     const { name } = req.body;
//     try {
//         let user = await User.findByPk(uid);
//         if (user && name) {
//             user.nameUser = name;
//             await user.save();
//         }
//         return res.status(204).json({});
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json(error);
//     }
// };




