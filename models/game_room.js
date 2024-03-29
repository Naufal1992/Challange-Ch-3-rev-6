'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class game_room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  game_room.init({
    p1_id: DataTypes.INTEGER,
    p2_id: DataTypes.INTEGER,
    p1_firstHand: DataTypes.STRING,
    p1_secondHand: DataTypes.STRING,
    p1_thirdHand: DataTypes.STRING,
    p2_firstHand: DataTypes.STRING,
    p2_secondHand: DataTypes.STRING,
    p2_thirdHand: DataTypes.STRING,
    Winner_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'game_room',
  });
  return game_room;
};