'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.detail, {foreignKey:'id_user'});
      // this.hasOne(models.point, {foreignKey:'id_user'});
    }
  }
  user.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    isSuperAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};