'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user: {
        type: Sequelize.INTEGER
      },
      fullname: {
        type: Sequelize.STRING
      },
      alias_name: {
        type: Sequelize.STRING
      },
      birthplace: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('details');
  }
};