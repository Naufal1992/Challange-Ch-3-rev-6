'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.user, {foreignKey: 'id'});
      // this.hasOne(models.point,{foreignKey: 'id_user'});
    };
  }
  detail.init({
    id_user: DataTypes.INTEGER,
    fullname: DataTypes.STRING,
    alias_name: DataTypes.STRING,
    birthplace: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'detail',
  });
  return detail;
};