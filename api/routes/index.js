const { Router } = require('express');
const router = Router();


router.get('/',(req,res) => res.send('Bienvenido al backend de ¡EMIRAT propiedades!'));



router.use('/api/inmuebles', require('./inmuebles'));
router.use('/api/categorias', require('./categorias'))
router.use('/api/auth', require('./auth'));
router.use('/api/usuarios', require('./usuarios'));



module.exports = router;
