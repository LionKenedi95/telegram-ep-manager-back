'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('timeSlots', 'serviceId', 'serviceID');
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('timeSlots', 'serviceID', 'serviceId');
  }
};