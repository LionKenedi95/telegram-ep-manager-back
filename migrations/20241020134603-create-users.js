'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
      },
      telegramID: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
      },
      language: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      firstName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      lastName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
    }, {
      tableName: 'users',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
