/*   Rutas de Categorias
     host + api/categorias
*/

const { Router } = require('express');
const router = Router();
const { getCategorias, crearCategoria, editCategoria, deleteCategoria, postCategoria, putCategoria } = require('../controllers/categorias');



router.get('/', getCategorias);
router.post('/', crearCategoria);
router.put('/', editCategoria);
router.delete('/', deleteCategoria);

router.post('/:codigo', postCategoria)  //agregar categoria a determinado producto
router.put('/:codigo', putCategoria)



module.exports = router