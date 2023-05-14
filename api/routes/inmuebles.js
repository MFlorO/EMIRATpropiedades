/*   Rutas de Inmueble
     host + api/inmuebles
*/

const { Router } = require('express');
const router = Router();
const { getTodosLosInmuebles, getTodosLosInmueblesCategoria, getTodosSearch, getInmueblesOrdenadosPorPrecio, crearInmueble, getInmuebleId, editProducto, deleteInmueble, direccionGoogleMaps, cloudinary } = require('../controllers/inmuebles');


router.get('/', getTodosLosInmuebles );
router.get('/categoria/', getTodosLosInmueblesCategoria)
router.get('/busqueda/', getTodosSearch)
router.get('/orden/:ordenar', getInmueblesOrdenadosPorPrecio)

router.post('/', crearInmueble);
// router.put('/', editProducto)
router.delete('/:id', deleteInmueble)
router.get('/detalle/:id', getInmuebleId);
router.get('/maps/:direccion', direccionGoogleMaps);
router.post('/upload', cloudinary);






module.exports = router