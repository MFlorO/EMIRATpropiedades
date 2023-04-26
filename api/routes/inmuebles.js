/*   Rutas de Inmueble
     host + api/inmuebles
*/

const { Router } = require('express');
const router = Router();
const { getTodosLosInmuebles, getInmueble, crearInmueble, getInmuebleId, editProducto, deleteInmueble, direccionGoogleMaps } = require('../controllers/inmuebles');


router.get('/', async (req, res) => {

  const { c, s="", paginaActual = 0, items = 5 } = req.query;

  try {
    if ( c !== 'todos') {
      const inmueble = await getInmueble(c);
      
      if (inmueble.length === 0) return res.json({ ok: false, status: `No se encontraron inmuebles con esa categoria: ${c}` });
      

      let filteredInmueble = inmueble;
      
      // Filtrar los inmuebles según la búsqueda
      if ( s && s!== undefined ) {
        filteredInmueble = inmueble.filter(inmueble => inmueble.nombre.includes(s));
    
        if (filteredInmueble.length === 0) return res.json({ ok: false, status: `No se encontraron inmuebles para la búsqueda ${s}` });
      }

      const cantidadTotal = filteredInmueble.length
      const cantidadPaginas = Math.ceil(cantidadTotal / items)
      const set = parseInt(paginaActual) * items 
      const limite =  set + parseInt(items) 

      let filteredInmueble2 = filteredInmueble.slice(set,limite)


      return res.status(201).json({ ok: true, status: `Inmuebles encontrados para la categoría ${c}`, cantidadTotal, cantidadPaginas, inmueble: filteredInmueble2 });

    } else {
      const inmueble = await getTodosLosInmuebles();
      
      if (inmueble.length === 0) return res.status(404).json({ ok: false, status: 'No se encontraron inmuebles' });

      
      let filteredInmueble = inmueble;

      
      // Filtrar los inmuebles según la búsqueda
      if ( s && s!== undefined ) {
        filteredInmueble = inmueble.filter(inmueble => inmueble.nombre.includes(s));
    
        if (filteredInmueble.length === 0) return res.json({ ok: false, status: `No se encontraron inmuebles para la búsqueda ${s}` });
      }

      const cantidadTotal = filteredInmueble.length
      const cantidadPaginas = Math.ceil(cantidadTotal / items)
      const set = parseInt(paginaActual) * items 
      const limite =  set + parseInt(items) 


      let filteredInmueble2 = filteredInmueble.slice(set,limite)


      return res.status(201).json({ ok: true, status: 'Todos los inmuebles', cantidadTotal, cantidadPaginas, inmueble:filteredInmueble2});
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});


router.post('/', crearInmueble);
router.put('/', editProducto)
router.delete('/', deleteInmueble)
router.get('/detalle/:id', getInmuebleId);
router.get('/maps/:direccion', direccionGoogleMaps);







module.exports = router