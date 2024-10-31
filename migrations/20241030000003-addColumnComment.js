module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn('appointments', 'comment', {
        type: Sequelize.STRING,
        default: '',
      });
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.removeColumn('appointments', 'comment');
    }
  };