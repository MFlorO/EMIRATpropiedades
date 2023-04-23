/*   Rutas de Inmueble
     host + api/inmuebles
*/

const { Router } = require('express');
const router = Router();
const { getTodosLosInmuebles, getInmueble, crearInmueble, getInmuebleId, editProducto, deleteInmueble, getSearch } = require('../controllers/inmuebles');



router.get('/', async (req, res) => {

     const { c } = req.query

     try {
  
     if ( c !== undefined && c ) {
          const inmueble = await getInmueble(c)

          inmueble.length === 0 
          ? res.json({
               ok: false,
               status: `No se encontraron inmuebles con esa categoria: ${c}`,
         })
         : res.status(201).json({
          ok: true,
          status: `Inmuebles con esa categoria: ${c}`,
          inmueble
         })
       
     } else {
           const inmueble = await getTodosLosInmuebles()

           inmueble 
           ? res.status(201).json({
               ok: true,
               status: "Todos los inmuebles",
               inmueble
           })
           : res.status(404).json({
               ok: false,
               status: 'No se encontraron inmuebles'
           });
         }

     } catch (error) {
       console.log(error);
       res.status(500).json(error);
     }
   });


router.post('/', crearInmueble);
router.put('/', editProducto)
router.delete('/', deleteInmueble)
router.get('/detalle/:id', getInmuebleId);
router.get('/filter/busqueda', getSearch)






module.exports = router