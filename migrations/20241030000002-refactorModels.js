'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('businesses', 'companyName', {
      type: Sequelize.STRING,
      default: '',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('businesses', 'companyName');
  }
};