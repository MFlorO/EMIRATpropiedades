const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'inmueble',
    {
      nombre: {
        type: DataTypes.STRING(25),
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING(10000),
        allowNull: true,
      },
      precio: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      moneda: {
        type: DataTypes.STRING,
        defaultValue: 'USD',
        allowNull: false,
      },
      imagen: {
        type: DataTypes.ARRAY(DataTypes.STRING(100000)),
        allowNull: false,
      },
      fechaPublicacion: {
        type: DataTypes.STRING(10000),
        allowNull: false,
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: true,
      },


      destacado:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      status:{
        type: DataTypes.ENUM('Disponible', 'Reservado' ),
        defaultValue: 'Disponible'
      },
      antiguedad:{
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      mt2:{
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      dormitorios:{
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      baños:{
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      cochera:{
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      pileta:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      timestamps: false
    }
  );
};