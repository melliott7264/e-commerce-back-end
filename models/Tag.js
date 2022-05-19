const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
   id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     primaryKey: true,
     autoIncrement: true
   },
   tag_name: {
     type: DataTypes.STRING
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
    modelName: 'tag',
  }
);

module.exports = Tag;
