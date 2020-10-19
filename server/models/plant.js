'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Plant.belongsToMany(models.User, {through: models.Favorite})
      Plant.hasMany(models.Favorite)
    }
  };
  Plant.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    imgUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Plant',
  });
  return Plant;
};