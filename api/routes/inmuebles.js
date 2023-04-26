/*   Rutas de Inmueble
     host + api/inmuebles
*/

const { Router } = require('express');
const router = Router();
const { getTodosLosInmuebles, getInmueblesOrdenadosPorPrecio, crearInmueble, getInmuebleId, editProducto, deleteInmueble, direccionGoogleMaps } = require('../controllers/inmuebles');


router.get('/', getTodosLosInmuebles );
router.get('/orden/:orden', getInmueblesOrdenadosPorPrecio)

router.post('/', crearInmueble);
router.put('/', editProducto)
router.delete('/', deleteInmueble)
router.get('/detalle/:id', getInmuebleId);
router.get('/maps/:direccion', direccionGoogleMaps);







module.exports = router