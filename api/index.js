const app = require('./app.js');
require('dotenv').config();
const { PORT } = require("./env");
const { conn } = require('./database/db.js')
const { createCategorias } = require('./syncDB/utils.js')

conn.sync({ force: true }).then(async () => {
    console.log('Empezando con el script sync')
    console.log('Creando Categorias ...')
    await createCategorias()  //Aca llamo la funcion de que me crea las categorias cuando se levanta la app
    console.log('Done')


    app.listen((PORT || 3001), async () => {
      console.log(`% listening at ${PORT || 3001}`); // eslint-disable-line no-console
    });

});


