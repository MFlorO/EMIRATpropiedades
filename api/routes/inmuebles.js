/*   Rutas de Inmueble
     host + api/inmuebles
*/

const { Router } = require('express');
const router = Router();
const { getInmueble, crearInmueble, getInmuebleId, editProducto, deleteInmueble, getProductosByFilter } = require('../controllers/inmuebles');



router.get('/', getInmueble);
router.post('/', crearInmueble);
router.put('/', editProducto)
router.delete('/', deleteInmueble)
router.get('/:id', getInmuebleId);
router.get('/filtros', getProductosByFilter)






module.exports = router