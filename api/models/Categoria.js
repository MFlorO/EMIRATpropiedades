const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

	sequelize.define(
		'categoria',
		{
			nombre: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			isActive: {
				type: DataTypes.BOOLEAN,
				defaultValue: true,
			},
		},
		{
			timestamps: false
		}
	);
};

