const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

	sequelize.define(
		'usuario',
		{
			uid: {
				type: DataTypes.STRING,
				allowNull: false,
				primaryKey: true,
			},
			nombre: {
				type: DataTypes.STRING,
				validate: {
					len: [1,100],
	     		},
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				validate:{
					is:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
				},
			},
			password: {
				type: DataTypes.STRING,
				validate: {
					len: [4,100],
				},
			},
			isActive: {
				type: DataTypes.BOOLEAN,
				allowNull: true,
				defaultValue: true,
			},
			foto: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			isAdmin: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},			
			direccion: {
				type: DataTypes.STRING,
				allowNull: true,
			}, 
			isBanned: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			}
		}
	);
};


