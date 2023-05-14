const express = require('express');
require('dotenv').config();


const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const routes = require('./routes/index');

//Cear el servidor express
const app = express()


//Cors y otros
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));

//Lectura y parseo del body
app.use(express.json()); 

//Rutas
app.use('/', routes);


module.exports = app;// -> se utiliza en index.js para hacer la conexion de express al puerto