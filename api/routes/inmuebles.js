/*   Rutas de Inmueble
     host + api/inmuebles
*/

const { Router } = require('express');
const router = Router();
const { getTodosLosInmuebles, getInmuebleCategoria, getSearch, crearInmueble, getInmuebleId, editProducto, deleteInmueble, direccionGoogleMaps } = require('../controllers/inmuebles');


router.get('/', getTodosLosInmuebles );
router.get('/categoria/', getInmuebleCategoria)
router.get('/busqueda/', getSearch)
router.get('/orden/:orden', getSearch)

router.post('/', crearInmueble);
router.put('/', editProducto)
router.delete('/', deleteInmueble)
router.get('/detalle/:id', getInmuebleId);
router.get('/maps/:direccion', direccionGoogleMaps);







module.exports = router