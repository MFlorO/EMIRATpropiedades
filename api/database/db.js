
require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');


const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;


//#############   CONEXION DE SEQUELIZE(ORM) A MI BD   #############//
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false,  // Para que no me salgan los datos de conexion
  native: false, // Permite que Sequelize sepa que podemos usar pg-native para ~30% más de velocidad
  port: DB_PORT,
  define: {
    freezeTableName: true,  // Mantiene los nombres definidos en los modelos (no los cambia a plural)
    timestamps: false
  }
});



//#############   VERIFICA SI MI CONEXION SE HIZO DE FORMA CORRECTA   #############//

sequelize.authenticate()
.then(()=>{
  console.log("Conexion exitosa de sequelize")
})
.catch( err => {
  console.log(err)
})




const basename = path.basename(__filename);
const modelDefiners = [];
fs.readdirSync(path.join(__dirname, '../models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '../models', file)));
  });


// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);





//#############   sequelize.models tiene los modelos como propiedades - los relaciono con destructuring  #############//

const { Inmueble, Categoria } = sequelize.models;




//#############   RELACION MUCHOS A MUCHOS - CREO LA TABLA INTERMEDIA   #############//
Inmueble.belongsToMany(Categoria, {
  through: 'inmueble_categoria',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
Categoria.belongsToMany(Inmueble, {
  through: 'inmueble_categoria',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});


  






module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
