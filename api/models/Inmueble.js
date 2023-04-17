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


      Destacado:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      status:{
        type: DataTypes.ENUM('Disponible', 'Reservado' ),
        defaultValue: 'Disponible',
        allowNull: false,
      },
      antiguedad:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      mt2:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      dormitorios:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      baños:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      cochera:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      pileta:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      }
    },
    {
      timestamps: false
    }
  );
};