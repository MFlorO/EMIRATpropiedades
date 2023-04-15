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
      imagen: {
        type: DataTypes.ARRAY(DataTypes.STRING),
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
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      }
    },
    {
      timestamps: false
    }
  );
};