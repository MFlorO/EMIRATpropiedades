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
			name: {
				type: DataTypes.STRING,
				allowNull: false,
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
				allowNull: false,
				validate: {
					len: [4,100],
				},
			},
			isActive: {
				type: DataTypes.BOOLEAN,
				allowNull: true,
				defaultValue:true,
			},
			profilePic: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			isAdmin: {
				type: DataTypes.BOOLEAN,
				defaultValue:false,
			},			
			address: {
				type: DataTypes.STRING,
				allowNull: true,
			}, 
			isBanned: {
				type: DataTypes.BOOLEAN,
				defaultValue:false,
			}
		}
	);
};


