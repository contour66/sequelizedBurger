// var sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes){
	var burger = sequelize.define("burger", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true

		},

		burger_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len:[1]
			}
		},

		devoured:{
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},

		date:{
			type: DataTypes.DATE
		}
		// timestamps: {true}
	});
	return burger;
};

