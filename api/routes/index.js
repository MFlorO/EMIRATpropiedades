const { Router } = require('express');
const router = Router();


router.get('/',(req,res) => res.send('Bienvenido al backend de ¡EMIRAT propiedades!'));



router.use('/api/inmuebles', require('./inmuebles'));
router.use('/api/categorias', require('./categorias'))





module.exports = router;
