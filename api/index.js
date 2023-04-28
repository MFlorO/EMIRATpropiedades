
const app = require('./app');
require('dotenv').config();
const { conn } = require('./database/db'); // "conn" tiene todos los modelos juntos, ya que es la instancia de sequelize.models renombrado
const { PORT } = require("./env");





//#############    SINCRONIZO LOS MODELOS. En desarrollo usamos "force:true"   #############//
conn.sync({ force: true }).then(() => {
  app.listen(`${PORT || 3001}`, () => {
    console.log(`% listening at ${PORT || 3001}`); // eslint-disable-line no-console
  });
});