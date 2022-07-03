'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class point extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.detail,{foreignKey: 'id_user'});
      // this.hasOne(models.detail, {foreignKey:'id_user'});
    };
  }
  point.init({
    id_user: DataTypes.INTEGER,
    point_user: DataTypes.INTEGER,
    played_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'point',
  });
  return point;
};