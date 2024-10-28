'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('timeSlots', {
      id: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: 'users', // Имя таблицы, с которой устанавливаем связь
          key: 'id'       // Поле, на которое ссылаемся
        },
        onUpdate: 'CASCADE', // При обновлении записи в users обновляется и userId в timeSlots
        onDelete: 'CASCADE'   // При удалении записи в users удаляется соответствующий слот
      },
      startDate: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      type: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('timeSlots');
  }
};
