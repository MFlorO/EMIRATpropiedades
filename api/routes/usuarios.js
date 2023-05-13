/*   Rutas de Inmueble
     host + api/usuarios
*/

const { Router } = require('express');
const router = Router();
const { getAll, updateActiveUser, createUser, deleteUser } = require('../controllers/usuarios');



router.get("/", getAll);
router.post("/", createUser);
// router.get("/:uid", getById);
router.put("/:uid", updateActiveUser);
router.delete("/:uid", deleteUser);



module.exports = router