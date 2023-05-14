require('dotenv').config();
const { Categoria } = require("../database/db");



// Carga las categorias al inicio de la api
async function createCategorias() {

    const nombreCategorias = ["alquiler","venta", "destacados"]  //Tiene que ser en minúscula

    nombreCategorias.map((a) => Categoria.create({ nombre: a }));
}




module.exports = {
  createCategorias
};
