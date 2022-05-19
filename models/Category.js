const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
    
  },
  // Options for database build
  {
    sequelize,
    timestamps: false,
    // prevents the use of plurals in database names
    freezeTableName: true,
    // uses underscores as opposed to default camelCase in database names
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
