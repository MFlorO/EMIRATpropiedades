/*   Rutas de Usuarios/Auth
     host + api/auth
*/

const { Router } = require("express");
const router = Router();
const { getAll, getById, createUser } = require("../controllers/auth");

router.get("/", getAll);
router.get("/:uid", getById);
router.post("/", createUser);


module.exports = router